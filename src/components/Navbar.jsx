import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import BooksDetails from '../components/BookDetails.jsx'
import AuthorDetails from '../components/AuthorDetails.jsx'
import AddBook from '../components/AddBook.jsx'
import AddAuthor from '../components/AddAuthor.jsx'
import EditBook from '../components/EditBook.jsx'
import EditAuthor from '../components/EditAuthor.jsx'


export default function Navbar() {  
    const navigate=useNavigate()
  return (
    <section>
    <nav className='bg-white w-full'>
        <div className='row'>
            <div className="col-auto"><button onClick={()=>navigate('./')} className='p-2 m-1 text-sm md:text-base font-poppins text-black'>Books</button></div>
            <div className="col-auto"><button onClick={()=>navigate('./author')} className='p-2 m-1 text-sm md:text-base font-poppins text-black'>Authors</button></div>
            <div className="col-auto"><button onClick={()=>navigate('./addbook')} className='p-2 m-1 text-sm md:text-base font-poppins text-black'>AddBook</button></div>
            <div className="col-auto"><button onClick={()=>navigate('./addauthor')} className='p-2 m-1 text-sm md:text-base font-poppins text-black'>AddAuthor</button></div>
            <div className="col-8"></div>
        </div>
    </nav>
        <Routes>
            <Route path='/' element={<BooksDetails />}/>
            <Route path='/author' element={<AuthorDetails />}/>
            <Route path='/addbook' element={<AddBook />}/>
            <Route path='/addauthor' element={<AddAuthor />}/>
            <Route path='/editbook/:bookid' element={<EditBook />}/>
            <Route path='/editauthor/:authorid' element={<EditAuthor />}/>
        </Routes>
    </section>
  )
}