import Cards from "./Cards";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { getNotesRequest } from "../api/notes"

function Notes() {

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
      <NavBar />
      <div className="p-10 flex justify-center">
            <Cards/>
      </div>
    </>
  );
}

export default Notes;
