import HabitCard from "../HabitCard/HabitCard";
import styles from "./Home.module.css";
import { connect } from "react-redux";

const Home = ({ habits }) => {
  return (
    //SHOW ALERT HEADING IF THERE ARE NO HABITS ELSE SHOW HABITS
    <div>
      {habits.length === 0 ? (
        <h1 className={styles.nohabitheading}>
          There are no habits. Please add a habit.
        </h1>
      ) : (
        <div className={styles.container}>
          {habits.map((habit) => {
            return <HabitCard key={habit.id} habit={habit} />;
          })}
        </div>
      )}
    </div>
  );
};

//ACCESS HABITS FROM STORE TO PROPS IN COMPONENT USING MAPSTATETOPROPS
const mapStateToProps = (state) => {
  return { habits: state.habits };
};

export default connect(mapStateToProps)(Home);
