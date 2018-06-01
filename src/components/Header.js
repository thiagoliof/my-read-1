import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <div>        
        <div className="list-books-title">
            <h1>{props.tittle}</h1>
            {props.backbutton === true && (
                <Link to="/">Voltar</Link>
            )}
        </div>
    </div>
)