import React, {useState, useEffect} from 'react';
import '../App.css';
import Header from './Header';
import Library from './Library';
import LibraryStats from './LibraryStats';
import NavBar from './NavBar';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
import GenreForm from './GenreForm';
import { Route, Switch } from "react-router-dom";



function App() {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(()=>{
      fetch(`http://localhost:9292/books`)
      .then((r)=> r.json())
      .then((books)=> setBooks(books))
  },[])

  useEffect(()=>{
    fetch(`http://localhost:9292/authors`)
    .then((r)=> r.json())
    .then((authors)=> setAuthors(authors))
  },[])

  useEffect(()=>{
    fetch(`http://localhost:9292/genres`)
    .then((r)=> r.json())
    .then((genres)=> setGenres(genres))
  },[])

    
  function handleAddAuthor(newAuthor){
    setAuthors([...authors, newAuthor])
  }

  function handleAddGenre(newGenre){
    setGenres([...genres, newGenre])
  }

  return (
    <div className="App">
      <Header/>
      <NavBar />
      <Switch>
        <Route exact path="/form">
          <BookForm />
        </Route>
        <Route exact path="/author">
          <AuthorForm onAddAuthor={handleAddAuthor}/>
        </Route>
        <Route exact path="/genre">
          <GenreForm onAddGenre={handleAddGenre}/>
        </Route>
        <Route exact path="/stats">
          <LibraryStats />
        </Route>
        <Route exact path="/">
          <Library books={books} setBooks={setBooks}/>
        </Route>
      </Switch> 
    </div>
    
  );
}

export default App;