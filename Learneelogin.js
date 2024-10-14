import React, { Component, useState } from 'react'
import './learnilogin.css'
import logimgright from './logimgright.png'
import logimgright1 from './logimgright(1).png'
import Dashborad from './Dashborad'
import { useNavigate } from 'react-router-dom'

const Learneelogin = ({setmail, setpasskey}) => {
    const [logname, setlogname] = useState("");
    const [logpass, setlogpass] = useState("");
    const navigate = useNavigate();
    const handleSubmitt = (e)=>{
        setmail(logname);
        setpasskey(logpass);
        navigate("/");
    }

  return (
    <div>
<div class="title_blur_container">
        <div class="blur_container_for_title"></div>
        <div class="title_container_with_blur"> &nbsp; &nbsp;WELCOME BACK! LET'S CONTINUE OUR JOURNEY! </div>
    </div>
             <div class="whole_container">
        <div class="blur_1_container"></div>

        <div class="welcome_back_to_img_holder">
            <div class="left_content_holder">
                <div class="wel_back_container">WELCOME BACK</div>
                <div class="please_enter_container">PLEASE ENTER YOUR ACCOUNT DETAILS</div>
                <div class="email_container">EMAIL</div>
                <div class="emai_input_container">
                    <input type="text" class="mail_input" 
                    onChange={(e)=>{setlogname(e.target.value)}}
                    ></input>
                </div>

                <div class="email_container">PASSWORD</div>
                <div class="emai_input_container">
                    <input type="password" class="mail_input" 
                    onChange={(e)=>{setlogpass(e.target.value)}}></input>
                </div>

                <div class="keep_to_forgot_container">
                    <div class="keep_container">DON'T HAVE AN ACCOUNT?</div>
                    <div class="forgot_container"><a href="./signup" class="forgot_link"> REGISTER</a></div>
                </div>

                {/* <a href="" class="sign_in_button"> */}
                    <button class="sign_button" type='submit' onClick={handleSubmitt} >LOG IN</button>
                {/* </a> */}

                <div class="socio_container">
                    <div class="google_holder"><a href="">
                        <i class="fa-brands fa-google google_icon"></i>
                    </a>
                    </div>
                    <div class="google_holder"><a href="">
                        <i class="fa-brands fa-github github_icon"></i>
                    </a>
                    </div>

                    <div class="google_holder"><a href="">
                        <i class="fa-brands fa-linkedin linked_in_icon"></i>
                    </a>
                    </div>
                </div>

                
            </div>
            <div class="right_img_container">
                <img src={logimgright1} alt="" class="right_img_holder"></img>
            </div>
        </div>

        <div class="blur_2_container"></div>
    </div>



    
    </div>
  )
}

export default Learneelogin

