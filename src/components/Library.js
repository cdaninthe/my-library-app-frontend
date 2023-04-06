import React, {useState} from "react";
import { Container } from "semantic-ui-react";
import Books from "./Books";
import Search from "./Search";


function Library({books, setBooks, authors, setAuthors, genres, setGenres}){
    const [search, setSeach] = useState('')

    const updatedBooks = books.filter((book) => (
        book.title.toLowerCase().includes(search.toLowerCase())
    ))

    return(
        <div>
            <br/>
            <h1>My library main page</h1>
            <Search setSearch={setSeach}/>
            <br/>
            <Container>
                <Books 
                    books={updatedBooks} setBooks={setBooks}
                    authors={authors} setAuthors={setAuthors}
                    genres={genres} setGenres={setGenres}
                />
            </Container>
            
        </div>
        
    
    );
}

export default Library;