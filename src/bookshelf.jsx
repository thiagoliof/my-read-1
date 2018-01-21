import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Bookshelf extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    
    
    static propTypes = {
        books: PropTypes.array.isRequired,
        handleUpdateBook: PropTypes.func,
    }
    

    handleChange(obj, event) {
        this.props.handleUpdateBook(obj, event.target.value)
    }
    

    render() {

        const { books } = this.props   

        return (
            <div>
                <br/>
                <br/>
                <br/>
                {books.length > 0 && (
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books.map((book) => (
                                    <li key={book.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                {book.imageLinks && ( 
                                                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                )}
                                               <div className="book-shelf-changer">
                                                    <select value={this.state.value} onChange={this.handleChange.bind(this, book)}>
                                                        <option value="" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            <div className="book-authors">
                                            {book.authors &&  
                                                book.authors.map((author, index) => (
                                                    <div key={index}>{author}</div>
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