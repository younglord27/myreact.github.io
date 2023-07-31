import { Button, colors } from "@mui/material"
import './index.css'
import { TextField } from '@mui/material';
import { Link,useLocation} from "react-router-dom";
import Backbutton from "../backbutton";

const Login = () => {

 

  const location=useLocation();

    const Homepage=location.pathname === '/';

   

  return (
    <div>

               
      <div class="box1">

      <Link to='/'>
                <img src="https://assets.turbologo.com/blog/en/2019/11/19084834/gaming-logo-cover.jpg" id="logo1" />
            </Link>
         

        <div class="box2">


          
          <h2 >USER LOGIN</h2>

          <TextField id="outlined-basic" label="Email" variant="outlined" /><br /><br />

          <TextField id="outlined-basic" label="password" variant="outlined"/>

        <Link to='/Forgot'><h4>forgot your password?</h4></Link>

          <Button variant="contained" id="l">LOGIN</Button> <br /><br />

          <h3>Don't have account? <span id="ok"><Link to="/Register">Sign up</Link></span></h3>


        </div>
      </div>


    </div>)


}

export default Login;



