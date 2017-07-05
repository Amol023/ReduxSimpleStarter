//  only the state this reducer is responsible for
export default function (state = null, action) {
  console.log(action);
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return state;
  }
}