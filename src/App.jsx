import { useState } from 'react'
import './App.css'
import {Routes,Route, Link} from 'react-router-dom';
import All from './components/all';
import Fsd from './components/fsd';
import Ds from './components/ds';
import Cs from './components/cs';
import Career from './components/career';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid">
        <div className="row header">
          <div className="col-4">
            <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png"/>
          </div>
          <div className="col-1">
            <h5>COURSES</h5>
          </div>
          <div className="col-2">
            <h5 className='dropdown-toggle'>LIVE CLASSES</h5>
          </div>
          <div className="col-1">
            <h5 className='dropdown-toggle'>PRACTICE</h5>
          </div>
          <div className="col-1">
            <h5 className='dropdown-toggle'>RESOURCES</h5>
          </div>
          <div className="col-2">
            <h5 className='dropdown-toggle'>OUR PRODUCTS</h5>
          </div>
        </div>
        <div className='row'>
          <div className="col-1"></div>
          <div className="col-10 ">
          <img className='banner' src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png"/>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row main">
            <ul class="nav nav-underline">
            <div className="col-3"></div>
              <div className="col-1">
              <li class="nav-item">
                <a class="nav-link"><Link to="/"><h6>ALL</h6></Link></a>
              </li>
              </div>
              <div className="col-1">
              <li class="nav-item">
                <a class="nav-link"><Link to="/Fsd"><h6>FULL STACK DEVELOPMENT</h6></Link></a>
              </li>
              </div>
              <div className="col-1">
              <li class="nav-item">
                <a class="nav-link"><Link to="/Ds"><h6>DATA SCIENCE</h6></Link></a>
              </li>
              </div>
              <div className="col-1">
              <li class="nav-item">
                <a class="nav-link"><Link to="/Cs"><h6>CYBER SECURITY</h6></Link></a>
              </li>
              </div>
              <div className="col-1">
              <li class="nav-item">
                <a class="nav-link"><Link to="/Career"><h6>CAREER</h6></Link></a>
              </li>
              </div>
              <div className="col-3"></div>
            </ul>
        </div>
        <Routes>
          <Route Component={All} path='/'></Route>
          <Route Component={Fsd} path='/Fsd'></Route>
          <Route Component={Ds} path='/Ds'></Route>
          <Route Component={Cs} path='/Cs'></Route>
          <Route Component={Career} path='/Career'></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
