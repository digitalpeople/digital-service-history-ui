import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

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
};

export default Navigation;
