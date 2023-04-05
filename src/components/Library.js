import React from "react";
import { Container } from "semantic-ui-react";
import Books from "./Books";


function Library({books, setBooks}){
    
    return(
        <div>
            <br/>
            <h1>My library main page</h1>
            <Container>
                <Books books={books} setBooks={setBooks}/>
            </Container>
            
        </div>
        
    
    );
}

export default Library;