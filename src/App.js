import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  // const [page, setPage] = useState('list')
  return (
    <div className="App-header">
  
     
      <BrowserRouter>
        {/* <Navbar /> */}
       
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Listado de Juegos'/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado de Juegos'/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
