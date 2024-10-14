import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Learneelogin from './Learneelogin'
import Learnsignup from './Learnsignup';
import Dashborad from './Dashborad';
import { Link } from "react-router-dom";


    
const Navigatorr = () => {
  const [user, setUser] = useState(null);
  const [mail, setmail] = useState(null);
  const [passkey, setpasskey] = useState(null);
  return (
    <div>

        <BrowserRouter>
        <nav>
        <Link to="/signup"></Link> <Link to="/"></Link> <Link to="/login"></Link>
        </nav>
        <Routes>
            <Route path="/" element={<Dashborad user={user} mail={mail} passkey={passkey}/>}></Route>
            <Route path="/login" element={<Learneelogin setmail={setmail} setpasskey={setpasskey}/>}></Route>
            <Route path="/signup" element={<Learnsignup setUser={setUser} setmail={setmail} setpasskey={setpasskey}/>}></Route>



        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default Navigatorr