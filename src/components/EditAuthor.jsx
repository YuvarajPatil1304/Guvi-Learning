import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { authorAPI } from '../API/API.jsx'
import { TextField } from '@mui/material'
import * as yup from "yup";
import { useFormik } from "formik";

export default function EditAuthor() {
  const {authorid}=useParams()
  const [authorData,setAuthorData]=useState(null)
  useEffect(()=>{
      const fetchData=async()=>{
          const response=await axios.get(`${authorAPI}/${authorid}`)
          await setAuthorData(response.data)
      }
      fetchData()
  },[])
  return authorData ? <EditAuthorDetails authorData={authorData} authorid={authorid}/> : "Loading...";
}

function EditAuthorDetails({authorData,authorid}){
  const navigate = useNavigate();
  const formValidationSchema = yup.object({
    name: yup
      .string()
      .min(5, "Need a longer name")
      .required("Why not fill this name?"),
    birthDate: yup
      .string()
      .min(5, "Need a longer birthDate")
      .required("Why not fill this birthDate?"),
    biography: yup
      .string()
      .min(20, "Need a longer biography")
      .required("Why not fill this biography?"),
  });
  const formik = useFormik({
    initialValues: { name: `${authorData.name}`, birthDate: `${authorData.birthDate}`, biography: `${authorData.biography}`},
    validationSchema: formValidationSchema,
    onSubmit: (newBook) => {
      handleAddNewBook(newBook);
    },
  });
  const handleAddNewBook = async (newBook) => {
    await axios.put(`${authorAPI}/${authorid}`, newBook);
    await navigate("/author");
  };
  return(
    <section className="mt-20">
    
      <form
        onSubmit={formik.handleSubmit}
        className="w-10/12 flex flex-col justify-center items-center  mx-auto p-10"
      ><p className='font-poppins font-bold text-2xl m-3 mb-10'>Edit Author Details</p>
        <TextField
          variant="outlined"
          id="name"
          name="name"
          type="text"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <p className="p-1 text-red-500 font-poppins text-sm">
            {formik.errors.name}
          </p>
        ) : (
          ""
        )}
        <br />

        <TextField
          variant="outlined"
          id="birthDate"
          name="birthDate"
          type="text"
          label="BirthDate"
          value={formik.values.birthDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.birthDate && formik.errors.birthDate ? (
          <p className="p-1 text-red-500 font-poppins text-sm">
            {formik.errors.birthDate}
          </p>
        ) : (
          ""
        )}
        <br />

        <TextField
          variant="outlined"
          id="biography"
          name="biography"
          type="text"
          label="Biography"
          value={formik.values.biography}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.biography && formik.errors.biography ? (
          <p className="p-1 text-red-500 font-poppins text-sm">
            {formik.errors.biography}
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