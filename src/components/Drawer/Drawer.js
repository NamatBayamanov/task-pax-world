import classes from "./Drawer.module.css";
import {Link} from "react-router-dom";
function Drawer() {






  return ( 
  <div className={classes.Drawer}>
    <div className={`${classes.background} `}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.backdrop} >
          asdfasdf
          </div>
          <ul className={classes.list}>
            <li>
              <Link to="/">
                Land Sale
              </Link>
            </li>
            <li>
              <Link to="/">
                Communication
              </Link>
            </li>
            <li>
              <Link to="/">
                Governance
              </Link>
            </li>
            <li>
              <Link to="/">
                Subverses
              </Link>
            </li>
            <li>
              <Link to="/">
                Roadmap
              </Link>
            </li>
            <li>
              <Link to="/">
                Partners
              </Link>
            </li>
            <li>
              <Link to="/">
                Subscribe
              </Link>
            </li>
            <li>
              <Link to="/">
                Whitepaper
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div> 
  );
}

export default Drawer;