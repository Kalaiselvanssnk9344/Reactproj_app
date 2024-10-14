import React, { useState } from 'react'
import './csssignup.css'
import logimgright from './logimgright.png'
import logimgright1 from './logimgright(1).png'
import { useNavigate } from 'react-router-dom'
const Learneelogin = ({setUser ,setmail, setpasskey}) => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    const navigate = useNavigate(); 
    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser(name);
        setmail(email);
        setpasskey(pass);

        navigate("/");

    }
  return (
    <div>
    <div class="title_blur_container2">
        <div class="blur_container_for_title2"></div>
        <div class="title_container_with_blur2"> &nbsp; &nbsp;JOIN US TODAY AND UNLOCK YOUR POTENTIAL ! </div>
    </div>
             <div class="whole_container2">
        <div class="blur_1_container2"></div>

        <div class="welcome_back_to_img_holder2">
            <div class="right_img_container2">
                <img src={logimgright1} alt="" class="right_img_holder2"></img>
            </div>
        
            <div class="left_content_holder2">
                <div class="wel_back_container2">WELCOME !</div>
                <div class="please_enter_container2">PLEASE ENTER YOUR ACCOUNT DETAILS</div>

                <div class="email_container2">USERNAME</div>
                <div class="emai_input_container2">
                    <input type="text" class="mail_input2" onChange={(e)=> setname(e.target.value)}></input>
                </div>

                <div class="email_container2">EMAIL</div>
                <div class="emai_input_container2">
                    <input type="text" class="mail_input2" onChange={(e)=> setemail(e.target.value)}></input>
                </div>

                <div class="email_container2">PASSWORD</div>
                <div class="emai_input_container2">
                    <input type="password" class="mail_input2" onChange={(e)=> setpass(e.target.value)}></input>
                </div>

                <div class="keep_to_forgot_container2">
                    <div class="keep_container2">ALREADY HAVE AN ACCOUNT?</div>
                    <div class="forgot_container2"><a href="/login" class="forgot_link2">LOGIN</a></div>
                </div>

                <a href="/" class="sign_in_button2">
                    <button class="sign_button" onClick={handleSubmit}>SIGN UP</button>
                </a>

                <div class="socio_container2">
                    <div class="google_holder2"><a href="">
                        <i class="fa-brands fa-google google_icon2"></i>
                    </a>
                    </div>
                    <div class="google_holder2"><a href="">
                        <i class="fa-brands fa-github github_icon2"></i>
                    </a>
                    </div>

                    <div class="google_holder2"><a href="">
                        <i class="fa-brands fa-linkedin linked_in_icon2"></i>
                    </a>
                    </div>
                </div>

                
            </div>
            </div>


        <div class="blur_2_container2"></div>
    </div>

    </div>
  )
}

export default Learneelogin