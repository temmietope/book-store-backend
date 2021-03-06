import React from "react";
import { CSSTransition } from "react-transition-group";
import BookItem from "../../../Components/books/BookItem";

const MyBooksList = ({ books, openAddModal }) => {
  console.log(books);
  return (
    <>
      {books.map((book) => {
        return (
          <CSSTransition key={book._id} timeout={500} classNames="item">
            <BookItem book={book} openAddModal={openAddModal} />
          </CSSTransition>
        );
      })}
    </>
  );
};

export default MyBooksList;
