import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../contextApi/todoContext";

const AddTask = ()=>{
    const [val,setVal] = useState("");
    const {setAddTask,addTask} = useContext(TodoContext);
    const navigator = useNavigate();
    return(<div>
        <div>
           <input style={{width:"20%",margin:"20px"}} type={"text"} placeholder="Enter task" onChange={(e)=>{setVal(e.target.value)}}/>
        </div>
        <button style={{width:"20%",margin:"0px 20px"}} onClick={()=>{
            setAddTask([...addTask,{task:val,status:"pending",action:"start", pause:""}]);
            navigator("/activity");
            }}>Add Task</button>
    </div>)
}

export default AddTask;