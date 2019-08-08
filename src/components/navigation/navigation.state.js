const state = {
  items: [
    {
      id: 0,
      path: '/about',
      text: 'About',
      restricted: true,
    },
    {
      id: 1,
      path: '/login',
      text: 'Login',
      restricted: false,
    },
    {
      id: 2,
      path: '/logout',
      text: 'Logout',
      restricted: true,
    },
  ],
  selected: {
    id: 1,
    path: '/login',
    text: 'Login',
    restricted: false,
  },
};

export default state;
