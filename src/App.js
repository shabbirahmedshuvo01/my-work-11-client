import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
      </Routes>
    </div>
  );
}

export default App;
