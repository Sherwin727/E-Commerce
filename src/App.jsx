import {Button} from 'react-bootstrap'
import reactLogo from './assets/react.svg'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import { CartProvider } from './assets/CartContext'; // Import the CartProvider
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import ViewProduct from './ViewProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


function App() {
  return (
      <div className="App">
        <BrowserRouter >
        <Header />
        <h1></h1>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/view' element={<ViewProduct/>}/>
        <Route path='/update' element={<UpdateProduct/>}/>
        </Routes>
        </ BrowserRouter >
      </div>
  );
}
export default App
