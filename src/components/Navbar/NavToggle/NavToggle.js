import classes from "./NavToggle.module.css";
import { BsList } from "react-icons/bs";



function NavToggle() {
  return ( 
    <div className={classes.NavToggle}>
      <span>
        <BsList />
      </span>
    </div>
  );
}

export default NavToggle;