import "./signupPage.css";
import { TodoContext } from "../contextApi/todoContext";
import { useContext } from "react";
import { useState } from "react";
const SignUpPage = ()=>{
    const {setRegisterData,registerData,SignupPost} = useContext(TodoContext);
    const [val,setVal] = useState({user_name:"",password:"",confirmPassword:""});
    const SignupHandler =()=>{
        if(val.password===val.confirmPassword){
            setRegisterData({...registerData,user_name:val.user_name,password:val.password});
            SignupPost();
        }
        else{
            alert("password does not match with confirm password")
        }
    }
    return(
       <div className="login-div aqua">
           <div className="login-card">
             <h1>Register</h1>
             <div>
               <input type={"text"} placeholder="Username" onChange={(e)=>{setVal({...val,user_name:e.target.value})}}/>
             </div>
            
             <div>
               <input type={"text"} placeholder="Userpassword" onChange={(e)=>{setVal({...val,password:e.target.value})}}/>
             </div>

             <div>
               <input type={"text"} placeholder="Confirm password" onChange={(e)=>{setVal({...val,confirmPassword:e.target.value})}}/>
             </div>

             <div>
                <button onClick={SignupHandler}>SIGNUP</button>
             </div>
             <div>Member Login</div>
            
           </div>
       </div>
    )
}

export default SignUpPage;