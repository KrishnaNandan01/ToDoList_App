
import { useNavigate } from "react-router-dom";
import "./activityPage.css";
const AcivityPage = ()=>{
    const navigate = useNavigate();
    return(<div className="activity-div">
        <div className="header">
            <strong>User name</strong>
        </div>
        <div className="table-div">
            <div className="left-div">
                
                <div>
                   <h4>To do List</h4>
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
                        <button>Add New Activity</button>
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
                            <tr>
                                <td>eating</td>
                                <td>completed</td>
                                <td>1:5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>)
}
export default AcivityPage;