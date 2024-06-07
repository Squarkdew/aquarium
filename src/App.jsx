import "./App.scss"
import axios from "axios";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Header from "./components/header/Header";

function App() {
  const get = async () => {
    try {
      const {data} = await axios.get("http://127.0.0.1:8000/api/fish/")
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    get()
  })
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
