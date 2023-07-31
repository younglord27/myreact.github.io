
import { Link, Route,Routes, useLocation} from "react-router-dom"
import Backbutton from "./backbutton"
import Home from "./screen/home"
import Login from "./screen/login"
import Register from "./screen/register"
import Forgot from "./screen/forgot"


 export function App() {

    const location=useLocation();

    const Homepage=location.pathname === '/';

    return(

        <div>
            {!Homepage && <Backbutton/>}
         
           
           
         
            
           <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/forgot" element={<Forgot/>}></Route>
            
            </Routes>



        </div>


    )
}

export default App;