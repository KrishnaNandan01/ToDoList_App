
//import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TodoContext } from "../contextApi/todoContext";

import "./activityPage.css";
const AcivityPage = ()=>{
     let {apiData,addTask,useName} = useContext(TodoContext);
    console.log(apiData);
    const navigate = useNavigate();
    const ActionHandler = (e)=>{
        let id = e.target.value
        if(addTask[id].action==="start"){
            addTask[id].action="End";
        }
    }
    return(<div className="activity-div">
        <div className="header">
            <strong>{useName}</strong>
        </div>
        <div className="table-div">
            <div className="left-div">
                
                <div>
                   <h4>To do List</h4>
                   <h4>History</h4>
                   {apiData.map((items)=>{
                    return(
                        <div className="complete" >
                        <span>{items.activity}</span>
                        <span>{items.time_taken}</span>
                      </div>
                     
                    )
                   })}
                  
                </div>
                <div>
                    <strong onClick={()=>{
                        localStorage.removeItem("token");
                        navigate("/");
                    }}>Logout</strong>
                </div>
            </div>
            <div className="right-div">
                <div className="add-new">
                    <div >
                        <Link to={"/addtask"}><button>Add New Activity</button></Link>
                    </div>
                </div>
                <div className="table-data">
                    <table>
                        <thead>
                            <tr>
                                <th>Activity</th>
                                <th>Status</th>
                                <th>Time Taken</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addTask.map((items,i)=>{
                                return(<tr key={i}>
                                    <td>{items.task}</td>
                                    <td>{items.status}</td> 
                                    <td></td>
                                    <td>
                                        <button onClick={ActionHandler} value={i}>{items.action}</button>
                                        </td>

                                </tr>)
                            })}

                        </tbody>
                        <tfoot>
                            {apiData.map((items)=>{
                                return(<tr>
                                    <td>{items.activity}</td>
                                    <td>Completed</td>
                                    <td>{items.time_taken}</td>
                                    <td></td>
                                </tr>)
                            })}
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>)
}
export default AcivityPage;