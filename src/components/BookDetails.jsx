import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { bookAPI } from '../API/API.jsx'
import BookCard from '../components/BookCard.jsx'
import { useNavigate } from 'react-router-dom'

export default function BooksDetails() {
    const [bookData,setBookData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await axios.get(`${bookAPI}`)
            await setBookData(response.data)
        }
        fetchData()
    },[])
    const handleDelete=async(id)=>{
      await axios.delete(`${bookAPI}/${id}`)
      await setBookData(bookData.filter((bookData)=>(bookData.id) !== id))
    }
    const handleEdit=async(id)=>{
      await navigate(`/editbook/${id}`)
    }
  return (
    <section className='w-11/12 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
    {bookData.map((bookData)=>(
        <BookCard key={bookData.id} bookData={bookData} handleDelete={handleDelete} handleEdit={handleEdit}/>
    ))}
    </section>
  )
}