import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import * as actionTypes from "../../redux/actions";

import styles from "./ShowDay.module.css";

const ShowDay = ({ idx, habit, updateStatus }) => {
  //LOAD THE INITIAL STATUS FROM HABIT WEEKSTATUS  ARRAY
  const getInitialStatus = () => {
    return habit.weekStatus[idx];
  };

  const [value, setValue] = useState(getInitialStatus());
  const [color, setColor] = useState("grey");

  //UPDATE THE COLOR WHENVER THERE IS CHANGE IN STATUS VALUE
  useEffect(() => {
    updateStatus(idx, habit.id, value);
    switch (value) {
      case "done":
        setColor("green");
        break;
      case "undone":
        setColor("red");
        break;
      default:
        setColor("grey");
    }
  }, [value]);

  //UPDATE THE STATUS VALUE
  const handleStatusChange = (e) => {
    setValue(e.target.value);
    toast.success("Status updated successfully");
  };

  return (
    <div className={styles.box} style={{ backgroundColor: color }}>
      <div> {`${1 + idx}/02/2023`}</div>
      <h4>{value}</h4>

      <select id="dayStatus" value={value} onChange={handleStatusChange}>
        <option value="done">Done</option>
        <option value="undone">Undone</option>
        <option value="none">none</option>
      </select>
    </div>
  );
};

//HANDLER FUNCTIONS WHICH WILL BE USED TO DESPTACH APPROPRIATE ACTION FROM UI
const mapDispatchToProps = (dispatch) => {
  return {
    updateStatus: (index, id, status) => {
      dispatch({
        type: actionTypes.UPDATE_STATUS,
        payload: { index, id, status },
      });
    },
  };
};

//USE CONNECT TO MAKE THESE HANDLER FUNCTION TO BE AVALIBLE TO SHOWDAY AS PROPS
export default connect(null, mapDispatchToProps)(ShowDay);
