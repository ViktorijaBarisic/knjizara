
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Books from './Components/Books';
import DodajNovuKnjigu from './Components/DodajNovuKnjigu';
import ProcitaneKnjige from './Components/ProcitaneKnjige';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { useState } from "react";

function App() {

  const [procitane, setProcitane] = useState([]);

  const [books, setBooks] = useState([
  { 

   id:1,  
   naziv:"Na Drini ćuprija", 
   pisac:"Ivo Andrić",
   kategorija:"roman",
   slika:"https://www.delfi.rs/_img/artikli/2016/04/na_drini_cuprija_vv.jpg",
   opis:"Na Drini ćuprija je roman srpskog književnika i nobelovca Ive Andrića. Roman pripoveda o građenju mosta preko reke Drine u bosanskom gradu Višegradu.", 
   procitano:false, 
    
  },
  { 

    id:2,  
    naziv:"Dete u tebi mora da pronađe svoj zavičaj", 
    pisac:"Štefani Štal",
    kategorija:"moderna psihologija",
    slika:"https://www.laguna.rs/_img/korice/4291/dete_u_tebi_mora_da_pronadje_svoj_zavicaj-stefani_stal_v.jpg",
    opis:"Ključ za rešavanje (skoro) svih problema.Svetski bestseler iz oblasti psihologije", 
    procitano:false,        
  },
  { 

    id:3,  
    naziv:"Serviraj za pobedu", 
    pisac:"Novak Đoković",
    kategorija:"edukativni",
    slika:"https://www.laguna.rs/_img/korice/2245/serviraj_za_pobedu_v.jpg",
    opis:"Četrnaestodnevni plan bezglutenske ishrane za vrhunska fizička dostignuća i mentalnu snagu.", 
    procitano:false,      
   },
   { 
 
     id:4,  
     naziv:"Knjiga o Netfliksu: Ne pravilima", 
     pisac:"Rid Hejstings i Erin Mejer",
     kategorija:"marketing",
     slika:"https://www.laguna.rs/_img/korice/5287/knjiga_o_netfliksu_v.jpg",
     opis:"Saznajte sve od tvorca lično!VREME JE DA SE RADI DRUGAČIJE", 
     procitano:false,         
   },   
]);
  
function dodajProcitane(id) {
  books.forEach((i) => {
    if (i.id === id) {
      i.procitano = true;
    }
  });
  refreshProcitane();
}

function izbaciProcitane(id) {
  books.forEach((i) => {
    if (i.id === id) {
      i.procitano = false;
    }
  });
  refreshProcitane();
}

function refreshProcitane() {
  let procitaneKnjige = books.filter((book) => book.procitano === true);
  setProcitane(procitaneKnjige);
}

let duzinaNiza = books.length;

  function handleDodaj(userData) {
    let noviNiz = books;
    noviNiz[noviNiz.length] = userData;
    setBooks(noviNiz);
    console.log(books);
  }

  
  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
       <Route
        path="/"
        element={<Books books={books} dodajProcitane={dodajProcitane} />}
      /> 
       <Route
        path="/procitane"
        element={<ProcitaneKnjige procitane={procitane} izbaciProcitane={izbaciProcitane} />}
      /> 
      <Route
        path="/novaknjiga"
        element={
          <DodajNovuKnjigu
            // handleInput={handleInput}
            handleDodaj={handleDodaj}
            duzinaNiza={duzinaNiza}
          />
        }
      />
    </Routes>
    <Footer />
  </BrowserRouter>
    
  );
}



export default App;
