import { Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import CreateUser from "./pages/Createuser";


function App() {
  return (
    <>
      <div className="bg-sky-200 h-screen">
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/createNote" element={<CreateNote/>} />
          <Route path="/createUser" element={<CreateUser/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
