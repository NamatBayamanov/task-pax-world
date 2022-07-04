import NavItem2 from "../Navbar/NavItem2/NavItem2";
import classes from "./Footer.module.css"

function Footer() {
  return ( 
    <div className={classes.Footer}>
      <ul>
        <li className={classes.li_1}> 
        <NavItem2/> 
        <span>pax.world ©2022 All Rights Reserved</span>
        
        </li>
        <li className={classes.li_2}>
          <li>Contact Us</li>
          <li>Brand Assets</li>
          <span>Made in Switzerland</span>
        </li>
      </ul>
    </div>
   );
}

export default Footer;