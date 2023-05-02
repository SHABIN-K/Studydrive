import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./Components/User";
import { Home, Login } from "./Pages/User";
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<Home/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
