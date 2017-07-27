export function selectBook(book){
// selectBook is an ActionCreator, it needs to return an action,
// they have a type and a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
