import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { bookAPI } from '../API/API.jsx'
import { TextField } from '@mui/material'
import * as yup from "yup";
import { useFormik } from "formik";
export default function EditBook() {
    const {bookid}=useParams()
    const [bookData,setBookData]=useState(null)
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await axios.get(`${bookAPI}/${bookid}`)
            await setBookData(response.data)
        }
        fetchData()
    },[])

  
  
    return bookData ? <EditBookDetails bookData={bookData} bookid={bookid}/> : "Loading...";
    
  
}

function EditBookDetails({bookData,bookid}){
    const navigate = useNavigate();

    const formValidationSchema = yup.object({
      title: yup
        .string()
        .min(5, "Need a longer title")
        .required("Why not fill this title?"),
      author: yup
        .string()
        .min(5, "Need a longer author name")
        .required("Why not fill this author name?"),
      ISBNNumber: yup
        .number()
        .min(5, "Need a longer ISBN Number")
        .required("Why not fill this ISBN Number?"),
      date: yup
        .string()
        .min(5, "Need a longer date")
        .required("Why not fill this date?"),
    });
    
    const formik = useFormik({
      initialValues: { title: `${bookData.title}`, author: `${bookData.author}`, ISBNNumber: `${bookData.ISBNNumber}`, date: `${bookData.date}` },
      validationSchema: formValidationSchema,
      onSubmit: (newBook) => {
        handleAddNewBook(newBook);
      },
    });
    const handleAddNewBook = async (newBook) => {
      await axios.put(`${bookAPI}/${bookid}`, newBook);
      await navigate("/");
    };
  
    return(
        <section className="mt-20">
    <form
      onSubmit={formik.handleSubmit}
      className="w-10/12 flex flex-col justify-center items-center  mx-auto p-10"
    ><p className='font-poppins font-bold text-2xl m-3 mb-10'>Edit Book Details</p>
      <TextField
        variant="outlined"
        id="title"
        name="title"
        type="text"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.title && formik.errors.title ? (
        <p className="p-1 text-red-500 font-poppins text-sm">
          {formik.errors.title}
        </p>
      ) : (
        ""
      )}
      <br />

      <TextField
        variant="outlined"
        id="author"
        name="author"
        type="text"
        label="Author"
        value={formik.values.author}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.author && formik.errors.author ? (
        <p className="p-1 text-red-500 font-poppins text-sm">
          {formik.errors.author}
        </p>
      ) : (
        ""
      )}
      <br />

      <TextField
        variant="outlined"
        id="ISBNNumber"
        name="ISBNNumber"
        type="text"
        label="ISBN Number"
        value={formik.values.ISBNNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.ISBNNumber && formik.errors.ISBNNumber ? (
        <p className="p-1 text-red-500 font-poppins text-sm">
          {formik.errors.ISBNNumber}
        </p>
      ) : (
        ""
      )}
      <br />

      <TextField
        variant="outlined"
        id="date"
        name="date"
        type="text"
        label="Date"
        value={formik.values.date}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.date && formik.errors.date ? (
        <p className="p-1 text-red-500 font-poppins text-sm">
          {formik.errors.date}
        </p>
      ) : (
        ""
      )}
      <br />


      <button
        type="submit"
        className="border p-2 m-2 font-poppins rounded-md"
      >
        Submit
      </button>
    </form>
  </section>
    )
}