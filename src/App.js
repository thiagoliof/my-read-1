import React from 'react'
import { Route } from 'react-router-dom'

import Header from './common/header.jsx'

import Bookshelves from './BookShelves.jsx'
import CreateBook from './CreateBook.jsx'
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Header tittle={'MyReads'} />  
        <Route path="/" exact render={() => (
          <Bookshelves/>
        )}/>
        <Route path="/create" component={CreateBook} />
      </div>
    )
  }
}

export default BooksApp
  