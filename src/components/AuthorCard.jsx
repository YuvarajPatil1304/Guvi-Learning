import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function AuthorCard({authorData,handleDelete,handleEdit}) {
  return (
    <div className='max-w-sm h-fit border p-4 m-2 rounded-md relative flex flex-col items-center'>
    <p className='p-1 font-poppins'>{authorData.name}</p>
    <p className='p-1 font-poppins'>{authorData.birthDate}</p>
    <p className='p-1 font-poppins'>{authorData.biography}</p>
    <div className='mt-4'>
    <button className='p-2 font-poppins border text-green-500 mx-2' onClick={()=>handleEdit(authorData.id)}><EditIcon />Edit</button>
    <button className='p-2 font-poppins border text-red-500 mx-2' onClick={()=>handleDelete(authorData.id)}><DeleteIcon />Delete</button>
    </div>
</div>
  )
}