import React from "react";
import { Card } from "semantic-ui-react";
import Book from "./Book";

function Books({books, setBooks}){
   

    

    return(
        <Card.Group itemsPerRow={4}>
            {books.map((book) => (
                <Book
                    key={book.id} book={book} 
                />
            ))}
        </Card.Group>
    );
}

export default Books;