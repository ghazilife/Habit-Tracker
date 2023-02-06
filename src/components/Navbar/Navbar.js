import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h1>
        {/* LINK OT MOVE TO HOME COMPONENT */}
        <Link
          to={"/"}
          style={{ textDecoration: "none", color: " rgb(255, 255, 255)" }}
        >
          Habit Tracker
        </Link>
      </h1>

      <div className={styles.quote}>
        <h2>Ninety-nine percent of the failures come from people </h2>
        <h2>who have the habit of making excuses.</h2>
      </div>

      {/* LINK TO ADD HABIT COMPONENT */}
      <div className={styles.navigationLink}>
        <Link className={styles.btn} to={"/add"}>
          Add Habit
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
