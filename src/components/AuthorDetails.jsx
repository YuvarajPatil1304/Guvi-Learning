import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { authorAPI } from '../API/API.jsx'
import AuthorCard from '../components/AuthorCard.jsx'
import { useNavigate } from 'react-router-dom'

export default function AuthorDetails() {
    const [authorData,setAuthorData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await axios.get(`${authorAPI}`)
            await setAuthorData(response.data)
        }
        fetchData()
    },[])
    const handleDelete=async(id)=>{
      await axios.delete(`${authorAPI}/${id}`)
      await setAuthorData(authorData.filter((authorData)=>(authorData.id) !== id))
    }
    const handleEdit=async(id)=>{
      await navigate(`/editauthor/${id}`)
    }
  return (
    <section className='w-11/12 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
    {authorData.map((authorData)=>(
        <AuthorCard key={authorData.id} authorData={authorData} handleDelete={handleDelete} handleEdit={handleEdit}/>
    ))}
    </section>
  )
}