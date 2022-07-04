import classes from "./Navpush.module.css";
import { Link } from "react-router-dom";


function Navpush() {
  return ( 
    <li className={`${classes.Navpush}`}>
      <Link to="/">
      Build your own

      </Link>
    </li>
  );
}

export default Navpush;