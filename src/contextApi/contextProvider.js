import { TodoContext } from "./todoContext";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const TodoContextProvider = (props)=>{
    const [registerData,setRegisterData] = useState({user_name:"",password:""});
    const [loginData,setLoginData] = useState({user_name:"",password:""});
    const navigator = useNavigate();
    const SignupPost = ()=>{
        axios.post("http://localhost:28005/register",registerData).then((res)=>{
            alert(res.data.status);
            navigator("/")
        }).catch((res)=>{
            console.log(res);
            alert(res.response.data.message)
        })
    }

    const LoginPost = ()=>{
        axios.post("http://localhost:28005/login",loginData).then((res)=>{
            console.log(res);
            localStorage.setItem("token",res.data.token);
            alert(res.data.message);
            navigator("/activity")
        }).catch((res)=>{
            console.log(res);
            alert(res.response.data.message)
        })
    }

    const FetchActivity = ()=>{
        const token = localStorage.getItem("token")
        const config = {
            headers:{authorization:token}
        }
        axios.post("http://localhost:28005/login",config).then((res)=>{
            console.log(res);
        }).catch((res)=>{
            console.log(res);
            alert(res.response.data.message)
        })
    }
   


    return(<TodoContext.Provider
    value={{ 
        setRegisterData,
        registerData,
        SignupPost,
        LoginPost,
        loginData,
        setLoginData,
        FetchActivity
        
    }}
    >
        {props.children}
        </TodoContext.Provider>)
}

export default TodoContextProvider;