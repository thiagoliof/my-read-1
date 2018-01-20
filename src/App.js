import React from 'react'
import { Route } from 'react-router-dom'

import Header from './common/header.jsx'

import Bookshelves from './BookShelves.jsx'
import CreateBook from './CreateBook.jsx'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
      books: []
  }

  /*
  currentlyReading = Currently Reading
  wantToRead = Want to Read
  read = Read
  'add none' = None
  */
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {      
      console.log(books)
      this.setState({ books:books })
    })
  }

  render() {
    return (
      <div className="app">
        <Header tittle={'MyReads'} />  
        <Route path="/" exact render={() => (
          <Bookshelves shelves={this.state.books} />
        )}/>
        <Route path="/create" component={CreateBook} />
      </div>
    )
  }
}

export default BooksApp
  