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
            <Link to="/novaknjiga">Dodaj novu knjigu</Link> 

            <Link to="/" className="nav-link" > Početna </Link>

           
    
            </div>
        
        </div>

   
  )
}

export default Navbar