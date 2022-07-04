import { Link } from "react-router-dom";
import classes from "./NavItem.module.css";
// import {useNavigate} from "react-router-dom";
function NavItem({children, url, push}) {

  
  
  return ( 
    <li className={`${classes.NavItem}`}  >
    
      <Link  to={url}>{children} </Link>
    </li>
  );
}

export default NavItem;