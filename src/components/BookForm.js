import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

function BookForm({onAddBook}){
    const [bookTitle, setBookTitle] = useState('')
    const [bookPages, setBookPages] = useState('')
    const [bookRead, setBookRead] = useState('')
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        console.log('i was submitted')
        history.push('/')
    }

    return(
        <div>
            <br/>
            <h1>New Book form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Book title" 
                    onChange={(e) => setBookTitle(e.target.value)}
                />
                <input type="text" name="pages" placeholder="Number of pages" 
                    onChange={(e) => setBookPages(e.target.value)}
                />
                <select name="type" onChange={(e)=> setBookRead(e.target.value)}>
                        <option value="">--Book status--</option>
                        <option value="true">Read</option>
                        <option value="false">Unread</option>
                </select>
                <button type="submit" className="active">Add Book</button>
            </form>
        </div>
        
    
    );
}

export default BookForm;