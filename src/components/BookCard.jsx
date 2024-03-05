import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function BookCard({ bookData, handleDelete, handleEdit }) {
  return (
    <section>
      <div className="max-w-sm max-h-full border p-4 m-2 rounded-md flex flex-col shadow-md  items-center">
        <div className=" flex flex-col items-center mt-2">
        <p className="p-1 text-2xl font-bold font-poppins mt-2">{bookData.title}</p>
        <p className=" text-xl font-medium font-poppins"> - {bookData.author}</p>
        <p className="p-1 text-base text-gray-500 font-poppins">ISBN Number - {bookData.ISBNNumber}</p>
        <p className="p-1 text-base text-gray-500 font-poppins">Published on - {bookData.date}</p>
        </div>
       <div className="mt-4">
       <button
          className="p-2 font-poppins border text-green-500 mx-2"
          onClick={() => handleEdit(bookData.id)}
        >
          <EditIcon />
          Edit
        </button>
        <button
          className="p-2 font-poppins border text-red-500 mx-2"
          onClick={() => handleDelete(bookData.id)}
        >
          <DeleteIcon />
          Delete
        </button>
       </div>
      </div>
    </section>
  );
}