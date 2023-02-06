import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import ShowDay from "../ShowDay/ShowDay";
import styles from "./WeekView.module.css";

const WeekView = ({ habits }) => {
  const params = useParams();
  const navigate = useNavigate();
  const habit = habits.filter((h) => h.id === parseInt(params.id))[0];

  return (
    <div className={styles.weekDetails}>
      <h1>{habit.title}</h1>

      <div>{habit.description}</div>
      <div className={styles.weekContainer}>
        {habit.weekStatus.map((status, idx) => {
          return <ShowDay key={idx} idx={idx} habit={habit} />;
        })}
      </div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back to Detail View
      </button>
    </div>
  );
};

//ACCESS HABITS FROM STORE TO PROPS IN COMPONENT USING MAPSTATETOPROPS
const mapStateToProps = (state) => {
  return {
    habits: state.habits,
  };
};

export default connect(mapStateToProps)(WeekView);
