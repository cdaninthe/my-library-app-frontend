import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";

function Book({book, onDeleteBook, onUpdateBook, authors, setAuthors, genres, setGenres}){
    const [bookHidden, setBookHidden] = useState('')
    const [formHidden, setFormHidden] = useState('hidden')
    const [title, setTitle] = useState("")
    const [read, setRead] = useState("")
    const [pages, setPages] = useState("")
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState("")

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
        setTitle(book.title)
        setRead(book.read)
        setPages(book.pages)
        setRead(book.read ? true : false)
        setAuthor(getAuthorName(book.author_id))
        setGenre(getGenreName(book.genre_id))
    }

    function handleSubmitUpdate(e){
        e.preventDefault()
        console.log('update', book.id)
        console.log(author, genre)

        const bookData = {
            title: title,
            pages: pages,
            author_id: getAuthorId(author),
            genre_id: getGenreId(genre),
            read: false
        }
        console.log(bookData)
        
        fetch(`http://localhost:9292/books/${book.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": 'application/json',
            }, 
            body: JSON.stringify(bookData),
        })
        .then((r)=> r.json())
        .then((updatedBook)=> onUpdateBook(updatedBook))
        // .then((updatedBook)=> console.log(updatedBook))

        setBookHidden('')
        setFormHidden('hidden')
    }

    function getAuthorId(name){
        const test = authors.find((author) => author.name === name)
        return test.id
    }

    function getGenreId(name){
        const test = genres.find((genre) => genre.name === name)
        return test.id
    }

    function getAuthorName(id){
        const test = authors.find((author) => author.id === id)
        return test.name
    }

    function getGenreName(id){
        const test = genres.find((genre) => genre.id === id)
        return test.name
    }

    return(
        <Card fluid color='yellow' >
            <div className="content" hidden={bookHidden}>
                <h3>{book.title}</h3>
                <h4>{getAuthorName(book.author_id)}</h4>
                <p>{getGenreName(book.genre_id)}</p>
                <p>{book.pages} pages</p> 
                <p>{book.read ? "Read" : "Not Read"}</p>       
            </div>
            <form hidden={formHidden} onSubmit={handleSubmitUpdate}>
                <label>Title:</label><br />
                <input value={title} onChange={(e)=> setTitle(e.target.value)}></input>
                <label>Author:</label><br />
                <select placeholder="Select an Author" onChange={(e) => setAuthor(e.target.value)}>
                    <option value={author}>{author}</option>
                    {authors.map((author) => (
                        <option key={author.id} value={author.name}>
                            {author.name}
                        </option>
                    ))}
                </select>
                <br />
                <label>Genre:</label><br />
                <select placeholder="Select an Author" onChange={(e) => setGenre(e.target.value)}>
                    <option value={genre}>{genre}</option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
                </select>
                <label>Page Number:</label><br />
                <input value={pages} onChange={(e)=> setPages(e.target.value)}></input>
                <label>Read:</label><br />
                {/* <input value={read} onChange={(e)=> setRead(e.target.value)}></input> */}
                {/* <input type="radio" name="false" value="false"></input>
                <label>Not Read</label><br/>
                <input type="radio" name="true" value="true"></input>
                <label>Read</label><br></br> */}
                <label>Read? </label><br />
                <select onChange={(e) => setRead(e.target.value)}>
                    <option value={read}>{read}</option>
                    <option value='true'>Read</option>
                    <option value='false'>Not Read</option>
                </select>
                <br />
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