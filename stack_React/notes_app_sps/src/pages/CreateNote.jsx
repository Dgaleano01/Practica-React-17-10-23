import NavBar from "./NavBar";

function CreateNote() {
  return (
    <>
      <NavBar />
      <div className="p-10 flex justify-center">
        <div className="bg-white w-96 md:w-7/12  rounded-md p-5 shadow-xl border-zinc-200">
          <div>
            <div className="text-xl font-semibold pb-2">
              <h2>Create a Note</h2>
            </div>
            <div>
              <div className="my-3">
                <select name="user" className="p-2 border-2 w-full rounded-md">
                  <option value={"usuario"}>Usuario</option>
                </select>
              </div>
              <div className="p-2 border-2 rounded-md my-3">
                <input placeholder="Title"></input>
              </div>
              <div className="my-3">
                <textarea placeholder="Content" className="p-2 border-2 w-full rounded-md"></textarea>
              </div>
              <div className="my-3">
                <input type="date" className="p-2 px-4 border-2 rounded-md" />
              </div>
              <div className="">
                <button className="p-2 px-4 rounded-md bg-blue-600 text-white">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNote;
