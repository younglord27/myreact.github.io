import { Button, colors } from "@mui/material"
import './index.css'
import { TextField } from '@mui/material';
import { Link,useLocation} from "react-router-dom";
import Backbutton from "../backbutton";

 export const Forgot = () => {

  

    const location=useLocation();

    const Homepage =location.pathname === '/';

    
    // let n =useNavigate()
    return (
      <div>
  
        <div class="box1">
  
        <Link to='/'>
                <img src="https://assets.turbologo.com/blog/en/2019/11/19084834/gaming-logo-cover.jpg" id="logo1" />
            </Link>
          <div class="box2">
  
  
            <h2>Restore Password</h2>
  
            <TextField id="outlined-basic" label="E-mail address" variant="outlined" />
      
            <h5>you will recive Email with password reset link</h5>
            
           <Button variant="contained">SEND INSTRUCTION</Button> 
  
           
           
          </div>
        </div>
  
  
      </div>)
  
  
  }
  
  export default Forgot;
  
  