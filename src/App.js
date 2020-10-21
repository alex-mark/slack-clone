import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
      </div>

      {/* Sidebar */}
      {/* React-Router */}
      {/* Chat screen */}
    </div>
  );
}

export default App;
