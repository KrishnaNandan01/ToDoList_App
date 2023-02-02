import { TodoContext } from "./todoContext";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const TodoContextProvider = (props)=>{
    const [registerData,setRegisterData] = useState({user_name:"",password:""});
    const [loginData,setLoginData] = useState({user_name:"",password:""});
    const [apiData,setApiData] = useState([]);
    let [addTask,setAddTask] = useState([]);
    const [useName,setUserName] = useState("User Name");
    const navigator = useNavigate();


    const SignupPost = ()=>{
        axios.post("https://todo-app-backend-by-krishna.onrender.com/register",registerData).then((res)=>{
            alert(res.data.status);
            navigator("/")
        }).catch((res)=>{
            console.log(res);
            alert(res.response.data.message)
        })
    }

    const LoginPost = ()=>{
        axios.post("https://todo-app-backend-by-krishna.onrender.com/login",loginData).then((res)=>{
            setUserName(loginData.user_name);
            console.log(res);
            localStorage.setItem("token",res.data.token);
            alert(res.data.message);
            navigator("/activity");
            FetchActivity();
        }).catch((res)=>{
            console.log(res);
            alert(res.response.data.message)
        })
    }

    const FetchActivity = ()=>{
        const token = localStorage.getItem("token");
        console.log(token);
        const config = {
            headers:{authorization:token}
        }
        axios.get("https://todo-app-backend-by-krishna.onrender.com/activities",config).then((res)=>{
            console.log(res.data);
            setApiData(res.data.activity);
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
        FetchActivity,
        apiData,
        setAddTask,
        addTask,
        useName
        
    }}
    >
        {props.children}
        </TodoContext.Provider>)
}

export default TodoContextProvider;