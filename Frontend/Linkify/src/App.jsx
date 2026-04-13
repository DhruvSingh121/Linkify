import React from "react";
import "./App.css";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="app">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
      <Home />
    </div>
  );
}

export default App;
