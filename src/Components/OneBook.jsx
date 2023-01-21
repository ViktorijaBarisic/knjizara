import React from 'react'

const OneBook = ({book}) => {
  return (

    <div className="card book">
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
        <h4> Cijena: </h4>
        <h4 className="cijena">
          <strong>{book.cijena} din </strong>
        </h4>
        <button type="button" className="btn btn-custom">
          Uredi
        </button>
        <button type="button" className="btn btn-custom obrisi">
          Obriši
        </button>
      </div>
    </div>
  )
}

export default OneBook