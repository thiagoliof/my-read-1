Projeto #p1-my-reads do Udacity

## Instruções para rodar o projeto
```npm -i && npm start```

## possiveis problemas
```
updateBook = (book, shelf) => {    
        this.props.onCreateBook(book, shelf);
        let _books = this.state.books.filter((c) => c.id !== book.id)
        let _books_copy = this.state.books.filter((c) => c.id == book.id) 
        _books_copy[0].shelf = shelf
        this.setState((state) => ({
            books: _books.concat([_books_copy[0]])
        }))
}
```
Acredito que o método acima está bastante prolixo e deve ter um jeito melhor de tratar isso

não to usando o método **orderby** vou add no proximo commit
