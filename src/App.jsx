import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home/Home';
import Product from './Components/Pages/Product';
import { Footer } from './Components/Footer/Footer';
import Checkout from './Components/Pages/Checkout';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/checkout' element={<Checkout/>}/>
     </Routes>
     
      <Footer/>
    </div>
  );
}

export default App;
