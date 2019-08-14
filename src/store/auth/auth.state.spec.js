import state from './auth.state';

describe('auth.state', () => {
  it('should match state', () => {
    expect(state).toMatchSnapshot();
  });
});
