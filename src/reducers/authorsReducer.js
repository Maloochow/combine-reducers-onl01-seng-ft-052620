export function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];
      break;
    case "REMOVE_AUTHOR":
      idx = state.findIndex((author) => author.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
      break;
    case "ADD_BOOK":
      let existingAuthor = state.filter(
        (author) => author.authorName === action.book.authorName
      );
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid() }];
      }
      break;

    default:
      return state;
      break;
  }
}