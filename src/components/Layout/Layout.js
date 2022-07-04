// import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import Toolbar from "../Toolbar/Toolbar";
import classes from "./Layout.module.css";


function Layout() {

  // const [switchs, setSwitchs] = useState(true);

  // const onToggle = (event) => {
  //   setSwitchs(!switchs);
  // }


  return ( 
    <div className={classes.Layout}>
      <div className={classes.background}>
        <Toolbar/>

        {/* <Drawer action={onToggle} state={switchs} /> */}

      </div>
    </div>
);
}

export default Layout;