import React from 'react'
import dashcss from './dashcss.css'
import twolight from './twolight.png'
import midtick from "./mdi_tick-decagram.png"
import logimgright1 from './logimgright(1).png'
import cat from './cat.jpg'


const Dashborad = ({user, mail ,passkey}) => {
  return (
    <div>
 <div class="main_container common_container">
    <div class="nav_bar_container_home ">
        <div class="title_name_container">LEARN $IMPLE</div>
        <div class="course_to_whyus_container">
            <div class="course_container"><a href="#">COURSES</a></div>
            <div class="whyus_container"><a href="#">WHY US</a></div>
        </div>
        <div class="login_to_signup_container">
            <div class="login_container_home"><a href="/login">LOGIN</a></div>
            <div class="sign_up_container_home"><a href="/signup">SIGN UP</a></div>
        </div>
    </div>
    
    <div class="mainpage_container_home" style={{
        // backgroundImage: `url(${twolight})`, 
        backgroundColor:'black',
     backgroundPosition:'center center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
        <div class="right_blur_container"></div>
         <div class='center_div_container'>
        <div class="learn_simple_container_heading"><span>[</span> LEARN $IMPLE
        <span> ]</span></div>
        <div class="master_the_container">
            MASTER THE ART OF FRONTEND DEVELOPMENT HERE !
        </div>
        <a href="/">
        <div class="get_start_button_container">GET STARTED</div>

        </a>
        <div class="start_your_container">
            START YOUR PATH TO BECOMING A FRONTEND EXPERT 
        </div>
        </div>

        <div class="left_blur_container"></div>
        

    </div>


    <div class="how_it_works_page_start ">
        <div class="left_blur_container"></div>
        <div class="left_in_how_container">
            <div class="how_title_container"><span>[</span> HOW IT &nbsp;
                <span class="works" style={{color: 'white'}}>WORKS</span>&nbsp;
                 <span>]</span>
            </div>

            <div class="explain_how_container">
                HERE  IS  THE  SIMPLE  EXPLANATION  <br></br>
                ABOUT HOW OUR PLATFORM WORKS 
            </div>
        </div>
        <div class="right_in_container">
            <div class="steps_title_container">STEPS :</div>
            <div class="browse_container">
                <div class="browse_title">BROWSE COURSE</div>
                <div class="tick_img_container"><img src={midtick} alt=""></img></div>
            </div>
            <div class="browse_container">
                <div class="browse_title">ENROLL COURSE</div>
                <div class="tick_img_container"><img src={midtick} alt=""></img></div>
            </div>
            <div class="browse_container">
                <div class="browse_title">LEARN THE COURSE</div>
                <div class="tick_img_container"><img src={midtick} alt=""></img></div>
            </div>
            <div class="browse_container">
                <div class="browse_title">COMPLETE THE PROJECT</div>
                <div class="tick_img_container"><img src={midtick} alt=""></img></div>
            </div>
            <div class="browse_container">
                <div class="browse_title">EARN  CERTIFICATES</div>
                <div class="tick_img_container"><img src={midtick} alt=""></img></div>
            </div>
        </div>
        <div class="right_blur_container"></div>

    </div>





    <div class="how_it_works_page_start ">
        <div class="right_blur_container"></div>
        <div class="right_in_container">
            <div class="steps_title_container2">EXPERT-LED CURRICULUM</div>
            <div class="para_why_us">
                Our courses are crafted and taught by 
                industry professionals with years of
                 hands-on experience in front-end development. 
                 You'll gain real-world insights and skills that 
                 are immediately applicable.
                 Web development is ever-evolving, 
                 and so is our curriculum. We ensure that 
                 our courses stay current with the latest 
                 technologies, frameworks, and best practices.
                 We believe in learning by doing. Each course 
                 includes interactive coding challenges, 
                 project-based learning, and real-world 
                 scenarios that help you build a portfolio from day one.



            </div>
        </div>
        <div class="left_in_how_container">
            <div class="how_title_container"><span>[</span> WHY &nbsp;
                <span class="works" style={{color: 'white'}}>US</span>&nbsp;
                 <span>]</span>
            </div>

            <div class="explain_how_container">
                HERE  IS  THE  SIMPLE  EXPLANATION  <br></br>
                ABOUT WHY US ! 
            </div>
        </div>
        <div class="left_blur_container"></div>

    </div>



    <div class="signup_and_profile_container">
        <div class="left_blurrr_container"></div>
        <div class="left_signup_container">
            {/* <div class="signuppp_title_container">SIGN UP</div>
            <div class="user_name_container">
                USER_NAME : <input type="text" class="us_input" placeholder="USER_NAME"></input>
            </div>
            <div class="user_name_container">
                NICK_NAME :&nbsp; <input type="text" class="us_input" placeholder="NICK_NAME"></input>
            </div>
            <div class="user_name_container">
                PASS_WORD : <input type="password" class="us_input" placeholder="PASS_WORD"></input>
            </div>
            <div class="button_container">
                <button class="button_holder">SUBMIT</button>
            </div> */}
            <img src={logimgright1} alt="" class="sing_up_img"></img>

        </div>


        <div class="right_profile_container">
            <div class="signuppp_title_container">PROFILE</div> 
            <div class="user_name_container2">
                USER_NAME :        <span style={{color:'#00FFB2', fontSize:'13px', fontWeight:'bold'}}>{user}</span>

            </div>
            <div class="user_name_container2">
                NICK_NAME :         <span style={{color:'#00FFB2', fontSize:'13px', fontWeight:'bold'}}>{mail}</span>
            </div>
            <div class="user_name_container2">
                PASS_WORD :        <span style={{color:'#00FFB2', fontSize:'13px', fontWeight:'bold'}}>{passkey}</span>
            </div>
        </div>

        <div class="right_blurrr_container"></div>
        
    </div> 

 <footer class="foot container">
    <div class="foot_holder1">
    <div class="foot_container1">
      <p class="foot_title">LEARN $IMPLE</p>
      <p class="foot_about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem fuga harum voluptate?</p>
    </div>
    <div class="foot_container2">
      <div class="contain2_title">Address</div>
      <div class="value1_foot">Covai, TamilNadu</div>
      <div class="value2_foot">skalai9344@gmail.com</div>
      <div class="value3_foot">KALAI SK</div>
      <div class="value4_foot">+91 9344338063</div>
    </div>
    <div class="foot_container3">
      <div class="contain2_title">Support</div>
      <div class="value1_foot">Account</div>
      <div class="value2_foot">Login / Register</div>
      <div class="value3_foot">Cart</div>
      <div class="value4_foot">Shop</div>
    </div>
    <div class="foot_container4">
      <div class="contain2_title">Help</div>
      <div class="value1_foot">Privacy Policy</div>
      <div class="value2_foot">Terms of use</div>
      <div class="value3_foot">FAQ's</div>
      <div class="value4_foot">Contact</div>
    </div>
    </div>
    <div class="foot_holder2">Copyright LEARN $IMPLE 2024 AUGUST. All right reserved</div>
  </footer>
  
  
  



</div> 
    </div>
  )
}

export default Dashborad



