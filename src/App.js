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
      {/* <Navbar />
      <div>
        <button className='but1' onClick={() => setPage('list')}>Listado</button>
        <button className='but2' onClick={() => setPage('detail')}>Detalle</button>
      </div>
      <div className="App-header">
        {page === 'list' && <ItemListContainer greeting='Productos' />}
        {page === 'detail' && <ItemDetailContainer />} */}
      <BrowserRouter>
        <Navbar />
        {/* <div className='rutas'>
          <Link to='/'>Listado</Link>
          <Link to='/detail'>Detalle</Link>
        </div> */}
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
