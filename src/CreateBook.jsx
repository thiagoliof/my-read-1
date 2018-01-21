import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Header from './common/header.jsx'
import Bookshelf from './BookShelf'
import {match_reading, match_want_read, match_read, match_none} from './common/enum.js'

class CreateBook extends Component{

    state = {
        query: '',
        books: []
    }

    static propTypes = {
        onCreateBook: PropTypes.func,
    }

    clearQuery = (query) => {
        this.setState({ query: '', books: [] })
    }

    updateQuery = (query='') => {
        this.setState(
            { query: query }
        )
        this.searchBook(query)
    }

    updateBook = (book, shelf) => {    
       
        this.props.onCreateBook(book, shelf);

        let _books = this.state.books.filter((c) => c.id !== book.id)
        let _books_copy = this.state.books.filter((c) => c.id == book.id)        
        _books_copy[0].shelf = shelf
        this.setState((state) => ({
            books: _books.concat([_books_copy[0]])
        }))
    }

    searchBook = (query) =>{
        if(query.length > 0){
            BooksAPI.search(query).then((books) => { 
                if(!books.error){
                    // transforma o array pois no metodo search nao vem 
                    // a propriedade shelf
                    books.map((book)=> {
                        //confere se shelf nao tem valor
                        if(!book.shelf){
                            book.shelf = 'none'
                        }
                    })
                    this.setState((state) => ({
                        books: books
                    }))
                }
                else{
                    this.setState((state) => ({
                        books: []
                    }))
                }
            })
        }
        else{
            this.setState((state) => ({
                books: []
            }))
        }
    }


    render(){
        
        const { query, books } = this.state
        let showingBooks = books

        return(
            <div>
                <Header tittle={'MyReads'} backbutton={true} /> 
                {/*Search*/}
                <div className="search-books">
                    <div className="search-books-bar">
                        {/* Verificando se a query lenght > 0 por uma questão de usabilidade */}
                            {query.length > 0 && (
                                <a className="close-search" onClick={this.clearQuery}>Close</a>
                            )}
                            <div className="search-books-input-wrapper">
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
            </div>
        )
    }
}

export default CreateBook