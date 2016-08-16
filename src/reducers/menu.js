const initialState = [
  {
    MenuVisible: true,
  },
];

export default function menu(state = initialState, action = {}) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return [
        {
          MenuVisible: ! state[0].MenuVisible,
          Test: 'TEST',
        },
      ];

    default:
      return state;
  }
}
