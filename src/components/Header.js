import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <div>        
        <div className="list-books-title">
            {props.backbutton === true && (
                <Link to="/" className={"back-button"}>Voltar</Link>
            )}
            <h1>My Reads</h1>
        </div>
    </div>
)