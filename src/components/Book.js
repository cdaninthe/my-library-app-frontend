import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";

function Book({book, onDeleteBook, onUpdateBook, authors, genres}){

    const [bookHidden, setBookHidden] = useState('')
    const [formHidden, setFormHidden] = useState('hidden')
    const [title, setTitle] = useState("")
    const [read, setRead] = useState()
    const [pages, setPages] = useState("")
    const [authorId, setAuthorId] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [genreId, setGenreId] = useState("")
    const [genreName, setGenreName] = useState("")
    const [like, setLike] = useState(false)
    

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
        setTitle(book.title)
        setRead(book.read)
        setPages(book.pages)
        setRead(book.read)
        setAuthorId(book.author_id)
        setAuthorName(book.author.name)
        setGenreId(book.genre_id)
        setGenreName(book.genre.name)
    }

    function handleSubmitUpdate(e){
        e.preventDefault()
       
        const bookData = {
            title: title,
            pages: pages,
            author_id: authorId,
            genre_id: genreId,
            read: read
        }

        fetch(`http://localhost:9292/books/${book.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": 'application/json',
            }, 
            body: JSON.stringify(bookData),
        })
        .then((r)=> r.json())
        .then((updatedBook)=> onUpdateBook(updatedBook))

        setBookHidden('')
        setFormHidden('hidden')
    }

    function handleLikeClick(){
        like ? setLike(false) : setLike(true)
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
                <select placeholder="Select an Author" onChange={(e) => setAuthorId(e.target.value)}>
                    <option value={authorId}>{authorName}</option>
                    {authors.map((author) => (
                        <option key={author.id} value={author.id}>
                            {author.name}
                        </option>
                    ))}
                </select>
                <br />
                <label>Genre:</label><br />
                <select placeholder="Select a Genre" onChange={(e) => setGenreId(e.target.value)}>
                    <option value={genreId}>{genreName}</option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>
                <br />
                <label>Page Number:</label><br />
                <input value={pages} onChange={(e)=> setPages(e.target.value)}></input>
                <label>Read? </label><br />
                <select onChange={(e) => setRead(e.target.value)}>
                    <option value={read}>{read ? "Read" : "Not Read"}</option>
                    <option value='true'>Read</option>
                    <option value='false'>Not Read</option>
                </select>
                <br />
                <button type="submit">Save Book Update</button>
                
            </form>
            <div>
                {like ? 
                    (<Icon name='heart' onClick={handleLikeClick}/>) 
                    :
                    (<Icon name='heart outline' onClick={handleLikeClick}/>)
                }  
                <Icon name='edit outline' onClick={handleEditClick}/>
                <Icon name='trash alternate outline' onClick={handleDeleteClick}/> 
            </div>
        </Card>   
    );
}

export default Book;