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
          
          <div>
          <li>Contact Us</li>
          <span>
          Made in 
          </span>
          </div>
          <div>
          <li>Brand Assets</li>
          <span>Switzerland</span>
          </div>
        
        </li>
      </ul>
    </div>
  );
}

export default Footer;