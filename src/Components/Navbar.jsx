import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
        <div className="navbar navbar-custom header"  >
            <Link to="/" className="navbar-brand" >
            Knjižara <strong>
                    Knjige
                </strong>
            
            </Link>
            <div>
            <Link to="/novaknjiga" className="nav-link">Dodaj novu knjigu</Link> 

            <Link to="/" className="nav-link" > Početna </Link>

            <Link to="/procitane" className="nav-link">Pročitane knjige</Link> 
    
            </div>
        
        </div>

   
  )
}

export default Navbar