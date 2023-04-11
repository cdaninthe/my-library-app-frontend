import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

function BookForm({onAddBook, authors, genres}){
    const [formData, setFormData] = useState({
        title: "",
        pages: "",
        author_id: 1,
        genre_id: 1,
        read: false
    })
    const history = useHistory()

    function handleChange(e) {
        let key = e.target.name
        let value = e.target.value
        setFormData({...formData, [key]: value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((newBook) => onAddBook(newBook));

        history.push('/')
    }

    return(
        <div>
            <br/>
            <h1>New Book form</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label><br />
                <input type="text" name="title" placeholder="Book title" 
                    onChange={handleChange}
                /><br /><br />

                <label>Author:</label><br />
                <select placeholder="Select an Author" name="author_id" onChange={handleChange}>
                    {/* <option value="null">"Select Author"</option> */}
                    {authors.map((author) => (
                        <option key={author.id} value={author.id}>
                            {author.name}
                        </option>
                    ))}
                </select>
                <br /><br />

                <label>Genre:</label><br />
                <select placeholder="Select a Genre" name="genre_id" onChange={handleChange}>
                    {/* <option value="null">Select Genre</option> */}
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>
                <br /><br />

                <label>Number of Pages:</label><br />
                <input type="number" name="pages" placeholder="Number of pages" 
                    onChange={handleChange}
                /><br /><br />

                <button type="submit" className="active">Add Book</button>
            </form>
        </div>
    );
}

export default BookForm;