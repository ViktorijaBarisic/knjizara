import React from 'react'
import OneBook from './OneBook';
import { useState } from "react";


function Books({ books, dodajProcitane }) {
  const [sortiranje, setSortiranje] = useState("none");

  function handleSort(e) {
    setSortiranje(e.target.value);
  }

  return (
    <>
    <div className="sortiranje " >
      <label htmlFor="sortiraj">Sortiranje: </label>
      <select name="sortiraj" id="sortiraj" className="sort" onChange={handleSort}>
        <option value="none">Podrazumevano</option>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
    </div>

    <div className="container books" id="kontejner">
      {sortiranje == "asc"
        ? books
            .sort((a, b) => (a.naziv < b.naziv ? -1 : 1))
            .map((knjiga) => (
              <OneBook
                book={knjiga}
                key={knjiga.id}
                dodajProcitane={dodajProcitane}
                dodanoUProcitane={false}
              />
            ))
        : sortiranje == "desc"
        ? books
            .sort((a, b) => (a.naziv < b.naziv ? 1 : -1))
            .map((knjiga) => (
              <OneBook
                book={knjiga}
                key={knjiga.id}
                dodajProcitane={dodajProcitane}
              />
            ))
        : books.map((knjiga) => (
            <OneBook
              book={knjiga}
              key={knjiga.id}
              dodajProcitane={dodajProcitane}
            />
          ))}
    </div>
  </>

  )
}





// const Books = ({books, dodajProcitane}) => {
//   return (
//     <>
//     <div className="sortiranje">
//       <label htmlFor="cena">Sortiranje: </label>
//       <select name="cena" id="cena" className="sort" onChange={handleSort}>
//         <option value="none">Podrazumevano</option>
//         <option value="asc">A - Z</option>
//         <option value="desc">Z - A</option>
//       </select>
//     </div>

//     <div className="container" id="kontejner">
//       {sortiranje == "asc"
//         ? books
//             .sort((a, b) => (a.naziv < b.naziv ? -1 : 1))
//             .map((knjiga) => (
//               <OneBook
//                 book={knjiga}
//                 key={knjiga.id}
//                 dodajProcitane={dodajProcitane}
//                 dodanoUProcitane={false}
//               />
//             ))
//         : sortiranje == "desc"
//         ? books
//             .sort((a, b) => (a.naziv < b.naziv ? 1 : -1))
//             .map((knjiga) => (
//               <OneBook
//                 book={knjiga}
//                 key={knjiga.id}
//                 dodajProcitane={dodajProcitane}
//               />
//             ))
//         : books.map((knjiga) => (
//             <OneBook
//               book={knjiga}
//               key={knjiga.id}
//               dodajProcitane={dodajProcitane}
//             />
//           ))}
//     </div>
//   </>

//   )
// }


export default Books