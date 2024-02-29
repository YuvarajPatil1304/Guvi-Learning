import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ListPages from "./Components/ListPage";
import { UserContextProvider } from "./Components/context/usercontext";

function App() {

  return (
    <>
      <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/ListPages" Component={ListPages} />
        </Routes>
      </UserContextProvider>
      </div>
    </>
  )
}

export default App
