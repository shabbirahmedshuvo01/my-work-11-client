import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Product from './components/Products/Product/Product';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
