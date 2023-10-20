import { useEffect, useState } from "react";
import { getNotesRequest } from "../api/notes"

function Cards() {

  const [notes, setNotes] = useState([]);

  async function getNotes(){
    try{
      const data = await getNotesRequest();
      setNotes(data.data);
    }catch ( error ){
      console.log(error)
    }
  }


  useEffect(()=>{
    getNotes()
  }, []);

  return (
    <>
        <div className="w-full h-72 rounded-md justify-evenly  flex flex-wrap">
        {notes.map((note)=>{
          return(
            <div key={note._id} className="shadow-lg">
          <div  className="bg-zinc-100 h-[20%] border-2  border-zinc-200 rounded-t-md flex justify-between items-center px-5">
            <h2 className="font-medium text-zinc-700">{note.title}</h2>
            <button className="bg-zinc-500 p-2 px-4 rounded-md text-white">
              Edit
            </button>
          </div>
          <div className="bg-white h-[60%] flex flex-col justify-center px-5">
            <p className="my-2">{note.description}</p>
            <p className="my-2">{note.user.name}</p>
            <p className="my-2">{note.date}</p>
          </div>
          <div className="bg-zinc-100 h-[20%] border-2 border-zinc-200 rounded-b-md flex items-center px-5">
            <button className="bg-red-600 p-2 rounded-md px-3 text-red-200">Delete</button>
          </div>
          </div>
          )})}
        </div>
    </>
  )
}

export default Cards