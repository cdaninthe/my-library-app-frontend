import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

function GenreForm({onAddGenre}){
    const [newGenre, setNewGenre] = useState('')
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        const genreData = {name: newGenre}

        fetch("http://localhost:9292/genres", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(genreData),
        })
        .then((r) => r.json())
        .then((newGenre) => onAddGenre(newGenre));
        history.push('/')
    }

    return(
        <div>
            <br/>
            <h1>New Genre Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Genre name" 
                    onChange={(e) => setNewGenre(e.target.value)}
                />
                <button type="submit" className="active">Add Genre</button>
            </form>
        </div>
        
    
    );
}

export default GenreForm;