import React, {useState} from "react";
import { Container } from "semantic-ui-react";
import Books from "./Books";
import Search from "./Search";


function Library({books, setBooks, authors, genres}){
    const [search, setSeach] = useState('')
   
    const updatedBooks = books.filter((book) => (
        book.title.toLowerCase().includes(search.toLowerCase())
    ))

    return(
        <div>
            <br/>
            <h1>Welcome to my Library</h1>
            <Search setSearch={setSeach}/>
            <br/>
            <Container>
                <Books 
                    books={updatedBooks} setBooks={setBooks}
                    authors={authors} 
                    genres={genres}
                />
            </Container>           
        </div>
    );
}

export default Library;