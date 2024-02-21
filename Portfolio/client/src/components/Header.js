import { Button } from "@mui/material";
import "./Header.css";
import "react-router-dom"
import { useNavigate } from "react-router-dom";
// import CottageIcon from '@mui/icons-material/Cottage';

export function Header() {
    const navigate = useNavigate();
    return(
        <div className="header">
            {/* <CottageIcon/> */}
            <Button onClick={()=>navigate("/")}><h3>Home</h3></Button>
            <Button onClick={()=>navigate("/projects")}><h3>Project</h3></Button>
            <Button onClick={()=>navigate("/education")}><h3>Education</h3></Button>
            <Button onClick={()=>navigate("/skills")}><h3>Skills</h3></Button>
            <Button onClick={()=>navigate("/about")}><h3>About</h3></Button>
        </div>
    );
}

