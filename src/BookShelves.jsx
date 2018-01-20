import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

import Bookshelf from './BookShelf'

class Bookshelves extends Component {

    static propTypes = {
        shelves: PropTypes.array.isRequired,
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query })
    }

    clearQuery = (query) => {
        this.setState({ query: '' })
    }

    render() {
        
        const { shelves } = this.props
        const { query } = this.state

        let showingBooks
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = shelves.filter((shelf) => match.test(shelf.title))
        } else {
            showingBooks = shelves
        }

        let books_reading
        const match_reading = new RegExp(escapeRegExp('currentlyReading'), 'i')
        books_reading = showingBooks.filter((shelf) => match_reading.test(shelf.shelf))
       
        let books_want_read
        const match_want_read = new RegExp(escapeRegExp('wantToRead'), 'i')
        books_want_read = showingBooks.filter((shelf) => match_want_read.test(shelf.shelf))

        let books_read
        const match_read = new RegExp(escapeRegExp('read'))
        books_read = showingBooks.filter((shelf) => match_read.test(shelf.shelf))
        
        let books_none
        const match_none = new RegExp(escapeRegExp('none'))
        books_none = showingBooks.filter((shelf) => match_none.test(shelf.shelf))


        return (
            <div>
                {/*Search*/}
                <div className="search-books">
                    <div className="search-books-bar">
                        {/* Verificando se a query lenght > 0 por uma questão de usabilidade */}
                            {query.length > 0 && (
                                <a className="close-search" onClick={this.clearQuery}>Close</a>
                            )}
                        <div className="search-books-input-wrapper">
                            {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
                            <input 
                                type="text" 
                                value={query} 
                                placeholder="Search by title or author"
                                onChange={(event) => this.updateQuery(event.target.value)}
                                />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
                {/*Final Search*/}
                <div className="list-books">
                    <div className="list-books-content">
                        <Bookshelf title='Currently Reading'    books={books_reading} />
                        <Bookshelf title='Want to Read'         books={books_want_read} />
                        <Bookshelf title='Read'                 books={books_read}  />
                        <Bookshelf title='None'                 books={books_none}  />
                    </div>  
                </div>
                <div className="add-book">
                    <Link to="/create">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Bookshelves;