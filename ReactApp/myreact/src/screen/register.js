
import { Button, colors } from "@mui/material"
import './index.css'
import { TextField } from '@mui/material';
import { Link,useLocation} from "react-router-dom";
import Backbutton from "../backbutton";

const Register = () => {

  

  const location=useLocation();

  const Homepage=location.pathname === '/';

 

  return (


    
    <div>

      <div class="bo1">

      <Link to='/'>
                <img src="https://assets.turbologo.com/blog/en/2019/11/19084834/gaming-logo-cover.jpg" id="logo1" />
            </Link>


        <div class="box2">



          <h2 >Create Account</h2>

          <TextField id="outlined-basic" label="Name" variant="outlined" /><br /><br />

          <TextField id="outlined-basic" label="Email" variant="outlined"/><br /><br />

          <TextField id="outlined-basic" label="password" variant="outlined"/> <br /><br />


         
          <Button variant="contained" id="l">SIGN UP</Button><br />

          <h3>Alredy have an have account? <span id="ok"> <Link to="/Login">Login</Link></span></h3>


        </div>
      </div>


    </div>)


}

export default Register;



