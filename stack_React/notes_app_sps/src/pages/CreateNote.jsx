import { useForm } from "react-hook-form";
import NavBar from "./NavBar";
import { createNoteRequest } from "../api/notes";
import { useEffect, useState } from "react";
import { getUsersRequest } from "../api/users"


function CreateNote() {
  const {register, handleSubmit} = useForm();
  const [users, setUsers] = useState([]);

  const onSubmit = handleSubmit(async(data)=>{
    await createNoteRequest(data)
  })

  async function getUsers(){
    try{
      const data = await getUsersRequest();
      setUsers(data.data);
    }catch ( error ){
      console.log(error)
    }
  }

  useEffect(()=>{
    getUsers()
  }, []);


  return (
    <>
      <NavBar />
      <div className="p-10 flex justify-center">
        <form onSubmit={onSubmit} className="bg-white w-96 md:w-7/12  rounded-md p-5 shadow-xl border-zinc-200">
          <div>
            <div className="text-xl font-semibold pb-2">
              <h2>Create a Note</h2>
            </div>
            <div>
              <div className="my-3">
                <select name="user" className="p-2 border-2 w-full rounded-md " {...register("user")}>
                {users.map((user)=>{
                  return(
                  <option key={user._id} value={user._id} >{user.name}</option>
                  )})
                }
                </select>
              </div>
              <div className="my-3">
                <input className="p-2 border-2 rounded-md w-full" placeholder="Title" {...register("title")}></input>
              </div>
              <div className="my-3">
                <textarea placeholder="Content" className="p-2 border-2 w-full rounded-md" {...register("description")}></textarea>
              </div>
              <div className="my-3">
                <input type="date" className="p-2 px-4 border-2 rounded-md"     {...register("date")}/>
              </div>
              <div className="">
                <button type="submit" className="p-2 px-4 rounded-md bg-blue-600 text-white">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateNote;
