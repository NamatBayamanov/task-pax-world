import classes from "./NavItem2.module.css";
import paxImage from "../../../assets/pax/pax.svg";
import { Link } from "react-router-dom";


function NavItem2() {
  return (
    <li className={classes.NavItem2}>
      <div>
        <Link to="/">
        <img src={paxImage} alt="#" /></Link>
        {/* <a href="/">pax.world</a> */}
      </div>
    </li>
  );
}

export default NavItem2;
