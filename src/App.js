import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
import { useState } from "react";
import { ReactQueryDevtools } from "react-query-devtools";
function App() {
  const [page, setPage] = useState("planets");
  return (
    <>
      <div className="App">
        <h1>Starwars info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initalIsOpen={false} />
    </>
  );
}

export default App;
