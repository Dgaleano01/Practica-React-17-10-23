import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="bg-zinc-700 w-full h-16 flex px-10 justify-between items-center">
        <div>
          <h1 className="text-xl text-white">NotesApp</h1>
        </div>
        <div >
            <ul className="flex text-zinc-500">
            <Link to={'/'}><li className="pr-2 hover:text-zinc-300 cursor-pointer">Notes</li></Link>
               <Link to={'/createNote'}><li className="pr-2 hover:text-zinc-300 ">Create Note</li></Link>
               <Link to={'/createUser'}><li className="hover:text-zinc-300 ">Create User</li></Link>
            </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
