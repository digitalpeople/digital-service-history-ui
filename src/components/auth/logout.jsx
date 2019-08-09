import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { logoutAction } from '../../store/auth/auth.action';

export const Logout = (props) => {
  const { onLogout } = props;

  onLogout();

  return <Redirect to="/login" />;
};

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logoutAction()),
});

export default connect(null, mapDispatchToProps)(Logout);
