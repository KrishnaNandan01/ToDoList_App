import LoginPage from "./login_page/loginPage";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignUpPage from "./signup_page/signupPage";
import AcivityPage from "./activityPage/activity_page";
import TodoContextProvider from "./contextApi/contextProvider";
import AddTask from "./addTask/addTask";

function App() {
  return (
    <BrowserRouter>
       <TodoContextProvider>
           <Routes>
               <Route path="/" element={ <LoginPage/>}/>
               <Route path="/signup" element={ <SignUpPage/>}/>
               <Route path="/activity" element={ <AcivityPage/>}/>
               <Route path="/addtask" element={ <AddTask/>}/>
           </Routes>
       </TodoContextProvider>
    
    </BrowserRouter>
  
  );
}

export default App;
