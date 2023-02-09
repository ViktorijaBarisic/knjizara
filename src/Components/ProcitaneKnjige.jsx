import React from "react";
import OneBook from "./OneBook";


function Procitano({ procitane, izbaciProcitane }) {
  return (
    <>
      <div className="naslov-fav">
        <h2>Pročitane knjige</h2>
        <div className="crta"></div>
      </div>
      <div className="container" id="kontejner">
        {procitane.map((knjiga) => (
          <OneBook
            book={knjiga}
            key={knjiga.id}
            izbaciProcitane={izbaciProcitane}
            dodanoUProcitane={true} 
          />
        ))}
      </div>
    </>
  );
}

export default Procitano;