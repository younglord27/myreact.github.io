
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Button} from "@mui/material"

import { useNavigate } from "react-router-dom";


let Backbutton=()=>{

let n =useNavigate() 

 return <Button  className="backbutton" variant="outline"  startIcon={<ArrowBackIcon />} onClick={()=>n(-1)}>back</Button>

}


export default Backbutton