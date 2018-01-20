import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Bookshelf extends Component {

    
    static propTypes = {
        books: PropTypes.array.isRequired,
    }
    

    render() {

        const { books } = this.props

        return (
            <div>
                {books.length > 0 && (
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                
                                {books.map((book) => (
                                    <li key={book.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                <div className="book-shelf-changer">
                                                    <select>
                                                        <option value="none" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            <div className="book-authors">
                                            {book.authors.map((author) => (
                                                <div>{author}</div>
                                            ))}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                
                            </ol>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Bookshelf;