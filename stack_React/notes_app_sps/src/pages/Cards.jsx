

function Cards() {
  return (
    <>
        <div className="w-72 h-72 rounded-md shadow-lg">
          <div className="bg-zinc-100 h-[20%] border-2 border-zinc-200 rounded-t-md flex justify-between items-center px-5">
            <h2 className="font-medium text-zinc-700">Titulo</h2>
            <button className="bg-zinc-500 p-2 px-4 rounded-md text-white">
              Edit
            </button>
          </div>
          <div className="bg-white h-[60%] flex flex-col justify-center px-5">
            <p className="my-2">description</p>
            <p className="my-2">Autor</p>
            <p className="my-2">Fecha</p>
          </div>
          <div className="bg-zinc-100 h-[20%] border-2 border-zinc-200 rounded-b-md flex items-center px-5">
            <button className="bg-red-600 p-2 rounded-md px-3 text-red-200">Delete</button>
          </div>
        </div>
    </>
  )
}

export default Cards