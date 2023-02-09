import React from 'react';
import { useState } from 'react';

const OneBook = ({book, dodajProcitane, izbaciProcitane, dodanoUProcitane}) => {
  const [hide, setHide] = useState(false);

  return (

    <div className={(book.procitano && !dodanoUProcitane) ? "hide" : "card book"}>
      <div className="card-header">
        <img src={book.slika} alt=""></img>
      </div>
      <div className="card-body">
        <div className="category">{book.kategorija}</div>
        <br />
        <h2 className="naslov">{book.naziv}</h2>
        <br />
        <p className="opis">{book.opis}</p>
        <br />
        <div>
          {!dodanoUProcitane ? (<> 
          <button type="button" className="btn btn-custom" onClick={() => {dodajProcitane(book.id); setHide(true); alert("Bravo!!!")}} >
          Pročitano
        </button>
        </>) 
        :  (<button type="button" className="btn btn-custom obrisi"  onClick={() => {izbaciProcitane(book.id); alert("Knjiga je uklonjena")}}>
          Ukloni
        </button>)}


        </div>


  
      </div>
    </div>
  )
}

export default OneBook