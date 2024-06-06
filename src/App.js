import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./components/Registration/Registration";
import Autorization from "./components/Autorization/Autorizatuion"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/autorization" element={<Autorization />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
