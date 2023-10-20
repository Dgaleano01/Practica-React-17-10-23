import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { createUserRequest, getUsersRequest } from "../api/users";
import {useForm} from 'react-hook-form';

function CreateUser() {
  const [users, setUsers] = useState([]);
  const {register, handleSubmit} = useForm();

  async function getUsers() {
    try {
      const data = await getUsersRequest();
      console.log(data)
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = handleSubmit(async(data)=>{
    await createUserRequest(data)
    await getUsers()
  }) 

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <NavBar />
      <div className="p-10 flex flex-col  items-start md:justify-around md:flex-row">
        <form onSubmit={onSubmit} className="bg-white w-72 md:w-64 rounded-md p-5 shadow-xl border-zinc-200">
          <div className="text-xl font-medium mb-3">
            <h2>Create New User</h2>
          </div>
          <div>
            <input
              placeholder="Name user"
              className="p-2 rounded-md border w-full" {...register("name")}
            />
          </div>
          <div className="mt-3">
            <button type="submit"  className="p-2 px-4 rounded-md bg-blue-600 text-white">
              Save
            </button>
          </div>
        </form>

        <div className="mt-0 w-11/12 md:w-7/12 rounded-md shadow-xl border-zinc-200 my-10 ">
        {users.map((user) => {
          return (
              <div key={user._id} className="bg-white border-slate-100 p-5 rounded-md border-2 w-full">
                <label>{user.name}</label>
              </div>

          );
        })}
        </div>
      </div>
    </>
  );
}

export default CreateUser;
