import React, {useState, useEffect} from 'react';
import '../App.css';
import Header from './Header';
import Library from './Library';
import LibraryStats from './LibraryStats';
import NavBar from './NavBar';
import BookForm from './BookForm';
import { Route, Switch } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <Header/>
      <NavBar />
      <Switch>
        <Route exact path="/form">
          <BookForm />
        </Route>
        <Route exact path="/stats">
          <LibraryStats />
        </Route>
        <Route exact path="/">
          <Library />
        </Route>
      </Switch> 
    </div>
    
  );
}

export default App;