import NavBar from "./NavBar"

function CreateUser() {
  return (
    <>
        <NavBar/>
        <div className="p-10 flex flex-col  items-center md:justify-around md:flex-row">
            <div className="bg-white w-72 md:w-64 rounded-md p-5 shadow-xl border-zinc-200">
                <div className="text-xl font-medium mb-3">
                    <h2>Create New User</h2>
                </div>
                <div>
                    <input placeholder="Name user" className="p-2 rounded-md border w-full"></input>
                </div>
                <div className="mt-3">
                <button className="p-2 px-4 rounded-md bg-blue-600 text-white">Save</button>
              </div>
            </div>
            <div className=" w-11/12 md:w-7/12 rounded-md shadow-xl border-zinc-200 my-10 ">
            <div className="bg-white border-slate-100 p-5 rounded-md border-2 w-full">
                <label>Jose</label>
            </div>
            <div className="bg-white border-slate-100 p-5 border-b-2 w-full rounded-md border-2">
                <label>Jose</label>
            </div>
            </div>
            
        </div>
    </>
  )
}

export default CreateUser