import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL
// console.log(import.meta.env)



function App() {

  const [ user, setUser ] = useState(null)


  return (
    <BrowserRouter>
      <Header user={user} />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
        <Route path="/register" element={<Register setUser={setUser}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
