import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL
// console.log(import.meta.env)



function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
