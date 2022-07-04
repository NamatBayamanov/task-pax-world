import classes from "./Navpush.module.css";



function Navpush() {
  return ( 
    <li className={`${classes.Navpush} ${classes.push}`}>
      <a href="/">
      Build your own

      </a>
    </li>
  );
}

export default Navpush;