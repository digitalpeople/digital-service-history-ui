import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Logout } from './logout';

configure({ adapter: new Adapter() });

describe('Logout', () => {
  it('should render component', () => {
    // ASSIGN
    const props = {
      onLogout: jest.fn(),
    };

    // ACT
    const actual = shallow(<Logout {...props} />);

    // ASSERT
    expect(actual.text()).toMatchSnapshot();
    expect(props.onLogout).toHaveBeenCalled();
  });
});
