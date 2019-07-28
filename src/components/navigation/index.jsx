import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './navigation.scss';
import { setNavigationItemAction } from './navigation.actions';

const Navigation = (props) => {
  const { navigation } = props;
  return (
    <nav>
      <ul className="nav">
        {
          navigation.items.map(item => (
            <li
              className="nav-item"
              key={item.id}
            >
              <NavLink
                to={item.path}
                onClick={() => props.setSelected(item)}
              >
                {item.text}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  navigation: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  setSelected: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  navigation: state.navigation,
});

const mapDispatchToProps = dispatch => ({
  setSelected: selected => dispatch(setNavigationItemAction(selected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
