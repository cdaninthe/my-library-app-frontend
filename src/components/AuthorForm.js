import React, {useState} from "react";
import {useHistory} from 'react-router-dom';


function AuthorForm({onAddAuthor}){
    const [newAuthor, setNewAuthor] = useState('')
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        const authorData = {name: newAuthor}

        fetch("http://localhost:9292/authors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(authorData),
        })
        .then((r) => r.json())
        .then((newAuthor) => onAddAuthor(newAuthor));
        history.push('/')
    }

    return(
        <div>
            <br/>
            <h1>New Author Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Author name" 
                    onChange={(e) => setNewAuthor(e.target.value)}
                />
                <button type="submit" className="active">Add Author</button>
            </form>
        </div>
        
    
    );
}

export default AuthorForm;