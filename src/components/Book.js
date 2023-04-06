import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";

function Book({book, onDeleteBook, onUpdateBook}){
    const [bookHidden, setBookHidden] = useState('')
    const [formHidden, setFormHidden] = useState('hidden')
    const [title, setTitle] = useState(book.title)
    const [pages, setPages] = useState(book.pages)
    const [read, setRead] = useState('')
    const [author, setAuthor] = useState(book.author.name)
    const [genre, setGenre] = useState(book.genre.name)

    // book.read ? setRead("yes") : setRead("no")

    function handleDeleteClick(){
        fetch(`http://localhost:9292/books/${book.id}`, {
            method: "DELETE",
        })
        .then((r)=> r.json())
        .then(()=> onDeleteBook(book))
    }

    function handleEditClick(){
        setBookHidden('hidden')
        setFormHidden('')
    }

    function handleSubmitUpdate(e){
        e.preventDefault()
        console.log('update', book.id)

        fetch(`http://localhost:9292/books/${book.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": 'application/json',
            }, 
            body: JSON.stringify({
                title: title,
                pages: pages,
                // read: read,
                // author: author,
                // genre: genre,
            }),
        })
        
        .then((r)=> r.json())
        .then((updatedBook)=> onUpdateBook(updatedBook))
        //.then((updatedItem)=> console.log(updatedItem))

        setBookHidden('')
        setFormHidden('hidden')
    }

    return(
        <Card fluid color='yellow' >
            <div className="content" hidden={bookHidden}>
                <h3>{book.title}</h3>
                <h4>{book.author.name}</h4>
                <p>{book.genre.name}</p>
                <p>{book.pages} pages</p> 
                <p>{book.read ? "Read" : "Not Read"}</p>       
            </div>
            <form hidden={formHidden} onSubmit={handleSubmitUpdate}>
                <label>Title:</label><br />
                <input value={title} onChange={(e)=> setTitle(e.target.value)}></input>
                <label>Author:</label><br />
                <input value={author} onChange={(e)=> setAuthor(e.target.value)}></input>
                <label>Genre:</label><br />
                <input value={genre} onChange={(e)=> setGenre(e.target.value)}></input>
                <label>Page Number:</label><br />
                <input value={pages} onChange={(e)=> setPages(e.target.value)}></input>
                <label>Read:</label><br />
                <input value={read} onChange={(e)=> setRead(e.target.value)}></input>
                <button type="submit">Save Book Update</button>
            </form>
            <div>
                <Icon name='heart outline' />    
                <Icon name='edit outline' onClick={handleEditClick}/>
                <Icon name='trash alternate outline' onClick={handleDeleteClick}/> 
            </div>
        </Card>
    );
}

export default Book;