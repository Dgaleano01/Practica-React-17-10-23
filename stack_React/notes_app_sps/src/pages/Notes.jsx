import Cards from "./Cards";
import NavBar from "./NavBar";

function Notes() {

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
