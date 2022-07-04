
import classes from "./NavItem.module.css";
import { Link } from "react-router-dom";

function NavItem({children, url, push}) {

  
  return ( 
    <li className={`${classes.NavItem}`}  >
      <a href={url}>{children}</a>
    </li>
  );
}

export default NavItem;