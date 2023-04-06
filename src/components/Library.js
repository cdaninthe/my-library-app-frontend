import React, {useState} from "react";
import { Container } from "semantic-ui-react";
import Books from "./Books";
import Search from "./Search";
import Filter from "./Filter";


function Library({books, setBooks, authors, genres}){
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
            <Filter/>
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