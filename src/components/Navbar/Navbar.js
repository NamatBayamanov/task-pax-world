import classes from "./Navbar.module.css";


import NavItem from "./NavItem/NavItem";
import NavItem2 from "./NavItem2/NavItem2";
import Navpush from "./Navpush/Navpush";
import NavToggle from "./NavToggle/NavToggle";

function Navbar() {
  return (
    <div className={classes.Navbar}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <ul className={classes.list}>
              {/* <li>
                <a href="/">Land Sale</a>
              </li> */}
              <NavItem url="/">Land Sale</NavItem>
              <NavItem url="/">Communication</NavItem>
              <Navpush/>
              <NavItem2/>
              <NavItem url="/">Governance</NavItem>
              <NavItem url="/">Partners</NavItem>
              <NavItem url="/">Roadmap</NavItem>
              <NavToggle/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
