
import { Button, colors } from "@mui/material"
import './index.css'
import LoginIcon from '@mui/icons-material/Login';
import { Link, useLocation } from "react-router-dom";
import Backbutton from "../backbutton";



const Home = () => {



  const location = useLocation();

  const Homepage = location.pathname === '/';

  { !Homepage && <Backbutton /> }

  return (

    <div>

      <div class="box1">

        <Link to='/'>
          <img src="https://assets.turbologo.com/blog/en/2019/11/19084834/gaming-logo-cover.jpg" id="logo1" />
        </Link>

        <div class="box2">


          <h1 >LOGIN HERE</h1>

          <h3> Welcome To Headshot Gaming Zone</h3> <br /><br />

          <Link to="/Login"> <Button variant="contained">LOGIN</Button></Link>  <br /><br />

          <Link to="/Register"><Button variant="outlined" > SIGN UP</Button> </Link> <br /><br />

          <Button variant="contained" color="error" startIcon={<LoginIcon />}>
            ADMIN & RESPONDER
          </Button>

        </div>


      </div>



    </div>)


}

export default Home;

