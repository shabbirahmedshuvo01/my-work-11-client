import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Product from './components/Products/Product/Product';
import Banner from './components/Banner/Banner';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import BookDetail from './components/BookDetail/BookDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/books/:bookId' element={<BookDetail></BookDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
