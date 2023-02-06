import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as actionTypes from "../../redux/actions";

import styles from "./HabitCard.module.css";

const HabitCard = ({ habit, deleteHabitHandler }) => {
  return (
    <div className={styles.card}>
      <h2>{habit.title}</h2>
      <div className={styles.actions}>
        <button>
          <Link to={`/weekview/${habit.id}`} style={{ textDecoration: "none" }}>
            WeekView
          </Link>
        </button>
        <button
          onClick={() => {
            deleteHabitHandler(habit.id);
            return toast.success("Habit deleted successfully");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

//DECLARE HANDLER FUNCTION WHICH WILL B USED TO DESPTACH APPROPRIATE ACTION FROM UI
const mapDispatchToProps = (dispatch) => {
  return {
    deleteHabitHandler: (id) =>
      dispatch({ type: actionTypes.REMOVE_FROM_HABITS, payload: { id } }),
  };
};

//USE CONNECT TO MAKE THESE HANDLER FUNCTION TO BE AVALIBLE TO HABITCARD AS PROPS
export default connect(null, mapDispatchToProps)(HabitCard);
