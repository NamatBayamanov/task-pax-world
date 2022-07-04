import classes from "./NavItem2.module.css";
import paxImage from "../../../assets/pax/pax.svg";


function NavItem2() {
  return (
    <li className={classes.NavItem2}>
      <div>
        <img src={paxImage} alt="#" />
        {/* <a href="/">pax.world</a> */}
      </div>
    </li>
  );
}

export default NavItem2;
