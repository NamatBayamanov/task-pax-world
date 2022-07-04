// import Header from "../Header/Header";

// import Navbar from "./components/Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";



import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import classes from "./Toolbar.module.css";
function Toolbar() {
  return ( 
    <div className={classes.Toolbar}>
      <Navbar/>
      <Drawer/>


      <Header/>
      <Footer/>
    </div>
  );
}

export default Toolbar;