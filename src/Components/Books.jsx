import React from 'react'
import OneBook from './OneBook';

const Books = ({books, dodajProcitane}) => {
  return (
    <div className="container books">
      
      {books.map((book) => (
        <OneBook book={book}  dodajProcitane = {dodajProcitane} key = {book.id}/>
      ))}

    </div>

  )
}

export default Books