import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainCart from './Components/Home/Cart/MainCart';
import { Home } from './Components/Home/Home';
import { Beds } from './Components/Products/Beds/Beds';
import { Lighting } from './Components/Products/Lighting/Lighting';
import { Sofa } from './Components/Products/Sofa/Sofa';
import { Furnishings } from './Components/Products/Furniture/Furniture';
import { Mattress} from './Components/Products/Mattress/Mattress';
import { Decor } from './Components/Products/Decor/Decor';
import {Cabinetry} from './Components/Products/Cabinetry/Cabinetry';
import {Applainces} from './Components/Products/Applainces/Applainces';
import Product from './Components/Pages/Product';

import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import Checkout from './Components/Pages/Checkout';

function App() {
  return (
    <div className="App">
    <Navbar />
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/applainces' element={<Applainces/>} />
        <Route path='/beds' element={<Beds/>} />
        <Route path='/cabinetry' element={<Cabinetry/>} />
        <Route path='/decor' element={<Decor/>} />
        <Route path='/furnishings' element={<Furnishings/>} />
        {/* <Route path='/furniture' element={<Furniture/>} /> */}
        <Route path='/lighting' element={<Lighting/>} />
        <Route path='/matress' element={<Mattress/>} />
        <Route path='/sofa' element={<Sofa/>}/>
        <Route path='/product' element={<Product/>} />
        <Route path='/checkout' element={<Checkout/>}/>
     </Routes>
     {/* <MainCart/> */}
      <Footer/>
    </div>
  );
}

export default App;
