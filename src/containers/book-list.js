import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {


  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          className="list-group-item"
          key={book.title}
          onClick={()=>this.props.selectBook(book)}>
          {book.title}
        </li>
      )
    })
  }


  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
  )};
}

function mapStateToProps(state){
  return {
    books: state.books
  }
};
// Anything returned from this function will end up as props in <BookList /> containers

function mapDispatchToProps(dispatch){
  //  Whenever selectBook is called, result should be passed to all reducers.
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

// Promote <BookList /> from component to container. Needs to know about new dispatch method, selectBook. Makes it available as props

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
