import React from "react";
import { Card } from "semantic-ui-react";
import Book from "./Book";

function Books({books, setBooks, authors, setAuthors, genres, setGenres}){
    function handleDeleteBook(deletedBook){
        const updatedBooks = books.filter((book)=> book.id !== deletedBook.id)
        setBooks(updatedBooks)
    }

    function handleUpdateBook(updatedBook){
        const updatedBooks = books.map((book) => {
            if (book.id === updatedBook.id) {
              return updatedBook;
            } else {
              return book;
            }
          });
          setBooks(updatedBooks)
          console.log(updatedBooks)
    }

    return(
        <Card.Group itemsPerRow={4}>
            {books.map((book) => (
                <Book
                    key={book.id} book={book} 
                    onDeleteBook={handleDeleteBook}
                    onUpdateBook={handleUpdateBook}
                    authors={authors} setAuthors={setAuthors}
                    genres={genres} setGenres={setGenres}
                />
            ))}
        </Card.Group>
    );
}

export default Books;