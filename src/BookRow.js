import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBook } from "./redux/actions";

class BookRow extends Component {
  render() {
    const book = this.props.book;
    return (
      <tr>
        <td>{book.title}</td>
        <td>
          {book.authors.map(author => (
            <div key={author.name}>{author.name}</div>
          ))}
        </td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
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
)(BookRow);
