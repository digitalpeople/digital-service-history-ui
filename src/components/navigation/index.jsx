import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  const { navigation } = props;
  return (
    <nav>
      <ul className="nav">
        {
          navigation.items.map(item => (
            <li className="nav-item">
              <NavLink
                key={item.id}
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
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Navigation;
