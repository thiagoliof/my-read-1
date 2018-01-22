import React from 'react'
import { Route } from 'react-router-dom'
import Bookshelves from './BookShelves.jsx'
import CreateBook from './CreateBook.jsx'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
      BooksAPI.getAll().then((books) => {      
          this.setState({ books:books })
      })
  }

  createBook(book, shelf) {
    this.updateBook(book, shelf)
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {      
      this.getAll();
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <Bookshelves books={this.state.books}
            onUpdateBook={(book, shelf) => {
              this.updateBook(book, shelf)
            }}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <CreateBook
              onCreateBook={(book, shelf) => {
                this.createBook(book, shelf)
              }}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
  