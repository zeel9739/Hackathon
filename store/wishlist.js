export default function wishlist(
  initialState = {
    favourite: false,
  },
  action
) {
  switch (action.type) {

    case 'TOGGLE_TRUE':
      return {
        ...initialState,
        favourite: true,
      };

    case 'TOGGLE_FALSE':
      return {
        ...initialState,
        favourite: false,
      };

    default:
      return initialState;
  }
}
