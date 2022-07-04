import classes from "./Header.module.css";
import buildImage from "../../assets/header/buildh.webp";

function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.flex}>
              <div className={classes.img__container}>
                <img src={buildImage} alt="#" />
              </div>

              <div className={classes.title}>
                <h2>Embedded communication technology</h2>
                <p>
                  We built the universe thoughtfully, requiring low tech
                  capabilities to connect you to the features you love. You can
                  use the advanced tech offered by pax.world in daily
                  communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
