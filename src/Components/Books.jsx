import React from 'react'
import OneBook from './OneBook';

const Books = ({books}) => {
  return (
    <div className="container books">
      {/* <OneBook book = {books[0]} /> 
      <OneBook book = {books[1]} /> */}
      
      {books.map((book) => (
        <OneBook book={book} />
      ))}

    </div>

  )
}

export default Books