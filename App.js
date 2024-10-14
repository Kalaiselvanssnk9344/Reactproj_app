// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [amount, setamount] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
      alert("please enter amount");
    }
    else{
      var option = {
        key:"rzp_test_kmBDLBwu9OepDk",
        key_secret:"pDclW8BOWgU3ukYlFeUlHiBY",
        amount: amount*100,
        currency:"INR",
        name:"STARTUP_PROJECTS",
        description : "for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"sk",
          email:"skalai9344@gmail.com",
          contact:"9344338063"
        },
        notes:{
          address:'Razor Corporate Office'
        },
        theme:{
          color:'red'
        }
      };
      var pay = new window.Razorpay(option);
      pay.open();

    }
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2 style={{color:'black', fontSize:'25px'}}>Razor pay payment integration using react</h2>
      <br></br>
      <input type="text" style={{color:'black', fontSize:'25px'}} value= {amount} onChange={(e)=>setamount(e.target.value)} placeholder='Enter Amount'></input>
      <br></br>
      <br></br>
      <button style={{color:'black', fontSize:'25px'}} onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default App;
