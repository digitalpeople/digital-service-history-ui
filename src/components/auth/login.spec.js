import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import { Login } from './login';

configure({ adapter: new Adapter() });

describe('Login', () => {
  it('should render component', () => {
    // ASSIGN
    const props = {
      onLogin: jest.fn(),
      auth: {
        isAuthenticated: false,
      },
    };

    // ACT
    const actual = shallow(<Login {...props} />);

    // ASSERT
    expect(toJSON(actual)).toMatchSnapshot();
  });
  it('should redirect component', () => {
    // ASSIGN
    const props = {
      onLogin: jest.fn(),
      auth: {
        isAuthenticated: true,
      },
    };

    // ACT
    const actual = shallow(<Login {...props} />);

    // ASSERT
    expect(toJSON(actual)).toMatchSnapshot();
  });
});
