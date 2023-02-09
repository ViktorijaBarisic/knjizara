
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Books from './Components/Books';
import DodajNovuKnjigu from './Components/DodajNovuKnjigu';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

function App() {
  const books = [
  { 

   id:1,  
   naziv:"Na Drini ćuprija", 
   pisac:"Ivo Andrić",
   kategorija:"roman",
   slika:"https://www.delfi.rs/_img/artikli/2016/04/na_drini_cuprija_vv.jpg",
   opis:"Na Drini ćuprija je roman srpskog književnika i nobelovca Ive Andrića. Roman pripoveda o građenju mosta preko reke Drine u bosanskom gradu Višegradu.", 
   cijena:2000, 
    
  },
  { 

    id:2,  
    naziv:"Dete u tebi mora da pronađe svoj zavičaj", 
    pisac:"Štefani Štal",
    kategorija:"moderna psihologija",
    slika:"https://www.laguna.rs/_img/korice/4291/dete_u_tebi_mora_da_pronadje_svoj_zavicaj-stefani_stal_v.jpg",
    opis:"Ključ za rešavanje (skoro) svih problema.Svetski bestseler iz oblasti psihologije", 
    cijena:1000, 
       
  },
  { 

    id:3,  
    naziv:"Serviraj za pobedu", 
    pisac:"Novak Đoković",
    kategorija:"edukativni",
    slika:"https://www.laguna.rs/_img/korice/2245/serviraj_za_pobedu_v.jpg",
    opis:"Četrnaestodnevni plan bezglutenske ishrane za vrhunska fizička dostignuća i mentalnu snagu.", 
    cijena:499, 
     
   },
   { 
 
     id:4,  
     naziv:"Knjiga o Netfliksu: Ne pravilima", 
     pisac:"Rid Hejstings i Erin Mejer",
     kategorija:"marketing",
     slika:"https://www.laguna.rs/_img/korice/5287/knjiga_o_netfliksu_v.jpg",
     opis:"Saznajte sve od tvorca lično!VREME JE DA SE RADI DRUGAČIJE", 
     cijena:1799, 
        
   },   
];
  
  
  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
       <Route
        path="/"
        element={<Books books={books} />}
      /> 
      {/* <Route
      addFavorite={addFavorite} ide u elemnt kraj books
        path="/omiljeno"
        element={<Omiljeno proizvodi={fav} removeFavorite={removeFavorite} />}
      /> */}
      <Route
        path="/novaKnjiga"
        element={
          <DodajNovuKnjigu
            // handleInput={handleInput}
            // handleDodaj={handleDodaj}
            // duzinaNiza={duzinaNiza}
          />
        }
      />
    </Routes>
    <Footer />
  </BrowserRouter>
    
  );
}



export default App;
