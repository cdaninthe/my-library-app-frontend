import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";

function Book({book}){

    return(
        <Card fluid color='yellow' >
            <div className="content">
                <h3>{book.title}</h3>
                <h4>{book.author.name}</h4>
                <p>{book.genre.name}</p>
                <p>{book.pages} pages</p> 
                <p>Read? {book.read}</p>       
            </div>
            <div>
                <Icon name='heart outline' />    
                <Icon name='edit outline' />
                <Icon name='trash alternate outline' /> 
            </div>
        </Card>
    );
}

export default Book;