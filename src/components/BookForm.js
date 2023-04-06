import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

function BookForm({onAddBook}){
    // const [bookTitle, setBookTitle] = useState('')
    // const [bookPages, setBookPages] = useState('')
    // const [bookRead, setBookRead] = useState('')
    const [formData, setFormData] = useState({
        title: "",
        pages: "",
        author_id: "",
        genre_id: "",
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
        console.log(formData)
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
                <input type="text" name="title" placeholder="Book title" 
                    onChange={handleChange}
                />
                <input type="number" name="pages" placeholder="Number of pages" 
                    onChange={handleChange}
                />
                <input type="number" name="author_id" placeholder="Author" 
                    onChange={handleChange}
                />
                <input type="number" name="genre_id" placeholder="Genre" 
                    onChange={handleChange}
                />
                {/* <select name="type" onChange={(e)=> setBookRead(e.target.value)}>
                        <option value="">--Book status--</option>
                        <option value="true">Read</option>
                        <option value="false">Unread</option>
                </select> */}
                <button type="submit" className="active">Add Book</button>
            </form>
        </div>
        
    
    );
}

export default BookForm;