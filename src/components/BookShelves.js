import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import {Bookshelf} from './BookShelf'
import Header from './Header'
import {match_reading, match_want_read, match_read, match_none} from '../helpers/enum.js'

class Bookshelves extends Component {

    state = {
        query: '',
        books: []
    }

    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func,
    }

    updateQuery = (query) => {
        this.setState({ query: query })
    }

    clearQuery = (query) => {
        this.setState({ query: '' })
    }

    updateBook = (book, shelf) => {
        console.log(shelf)
        this.props.onUpdateBook(book, shelf)
    }

    render() {
        
        const { books } = this.prop
        let showingBooks = books
        
        return (
            <div>
                <Header tittle={'MyReads'} />  
                <div className="list-books">
                    <div className="list-books-content">
                        
                        <Bookshelf 
                            title='Currently Reading'    
                            books={showingBooks.filter((shelf) => 
                                        match_reading.test(shelf.shelf))
                                  }            
                            handleUpdateBook={this.updateBook} 
                        />
                        
                        <Bookshelf 
                            title='Want to Read'         
                            books={showingBooks.filter((shelf) => 
                                    match_want_read.test(shelf.shelf))}                        
                            handleUpdateBook={this.updateBook} 
                        />
                        
                        <Bookshelf 
                            title='Read'                 
                            books={showingBooks.filter((shelf) => 
                                match_read.test(shelf.shelf))}                                  
                            handleUpdateBook={this.updateBook} 
                        />
                        
                        <Bookshelf 
                            title='None'                 
                            books={showingBooks.filter((shelf) => 
                                match_none.test(shelf.shelf))}                                  
                            handleUpdateBook={this.updateBook}  
                        />
                    
                        
                    </div>  
                </div>
                <div className="add-book">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Bookshelves;