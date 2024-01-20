import { useState } from 'react'
import './App.css'
import Index from './Pages/Home/index'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Productscart/index'
import Navbar from './components/Header/index'
import Billboard from './components/Billboard/index'
import Footer from './components/Footer/index'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
        <Billboard/>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <Routes>
                  <Route Component={Index} path='/' />
                  <Route Component={Cart} path='/Cart' />
                </Routes>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default App
