import React from 'react'
export const Bookshelf = props => {
    const handleChange =(obj, event)  => (
        props.handleUpdateBook(obj, event.target.value)
    )
    return (
        <div>
            <br/>
            <br/>
            <br/>
            {props.books.length > 0 && (
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {props.books.map((book) => (
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            {book.imageLinks && ( 
                                                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                            )}
                                            <div className="book-shelf-changer">
                                                <select value={book.shelf} onChange={handleChange.bind(this, book)}>
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