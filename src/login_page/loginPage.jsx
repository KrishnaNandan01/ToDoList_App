import "./loginPage.css"
import { Link } from "react-router-dom";
import { TodoContext } from "../contextApi/todoContext";
import { useContext } from "react";
const LoginPage = ()=>{
    const {loginData,setLoginData,LoginPost} = useContext(TodoContext);
    const LoginHandler =()=>{
        LoginPost();
    }
    return(
       <div className="login-div">
           <div className="login-card"> 
             <h1>Member Login</h1>
             <div>
               <input type={"text"} placeholder="Username" onChange={(e)=>{setLoginData({...loginData,user_name:e.target.value})}}/>
             </div>
            
             <div>
               <input type={"text"} placeholder="Userpassword" onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}}/>
             </div>

             <div>
                <button onClick={LoginHandler}>LOGIN</button>
             </div>
             <Link to={"/signup"}> <div>Signup</div></Link>
            
            
           </div>
       </div>
    )
}

export default LoginPage;