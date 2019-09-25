import React, { Component } from "react";
import { connect } from "react-redux";

import BookRow from "./BookRow";
import { fetchBook } from "./redux/actions";

class BookTable extends Component {
  render() {
    const bookRows = this.props.books.map(book => (
      <BookRow key={book.id} book={book} />
    ));
    return (
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookRows}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.bookState.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBook: () => dispatch(fetchBook())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookTable);
