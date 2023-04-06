import React, {useState, useEffect} from "react";
import { Card } from "semantic-ui-react";

function LibraryStats({books}){
    const [newest, setNewest] = useState([])
    const [mostPages, setMostPages] = useState([])
    const [unread, setUnread] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/books_most_pages`)
        .then((r)=> r.json())
        .then((book)=> setMostPages(book[0]))
    },[])

    useEffect(()=>{
        fetch(`http://localhost:9292/books_newest`)
        .then((r)=> r.json())
        .then((book)=> setNewest(book[0]))
    },[])

    useEffect(()=>{
        fetch(`http://localhost:9292/books_unread`)
        .then((r)=> r.json())
        .then((books)=> setUnread(books))
    },[])
    
    return(
        <div>
            <br/>
            <h1>My library Stats</h1>
            <br/>
            <Card.Group>
                <Card fluid color='yellow'>
                    <h3>Total Books in my Library</h3>
                    <p>{books.length} books</p>
                </Card>
                <Card fluid color='red'>
                    <h3>Total Unread Books in my Library</h3>
                    <p>{unread.length} unread books</p>
                </Card>
                <Card fluid color='green'>
                    <h3>Newest Book in my Library</h3>
                    <p>{newest.title}</p>
                </Card>
                <Card fluid color='blue'>
                    <h3>Book with the most pages</h3>
                    <p>{mostPages.title}</p>
                    <p>{mostPages.pages} pages</p>
                </Card>

            </Card.Group>
            
            
        </div>
    );
}

export default LibraryStats;