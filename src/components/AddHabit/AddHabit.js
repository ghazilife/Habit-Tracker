import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import * as actionTypes from "../../redux/actions";
import styles from "./AddHabit.module.css";

const AddHabit = ({ addHabitHandler }) => {
  //DEFINE LOCAL VARIABLES USING USESTATE HOOK
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const navigate = useNavigate();

  //ADD NEW HABIT
  const handleSubmit = (e) => {
    e.preventDefault();
    const newHabit = {
      id: Date.now(),
      title: title,
      description: desc,
      weekStatus: ["none", "none", "none", "none", "none", "none", "none"],
    };

    //FUNCTION TO DISPATCH ACTION
    addHabitHandler(newHabit);
    toast.success("Habit added successfully");
    //RESET THE INPUT
    setDesc("");
    setTitle("");
  };

  return (
    <div className={styles.addCard}>
      <h1> AddHabit</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Enter habit title"
        required
      />
      <input
        type="text"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        placeholder="Add some description ..."
        required
      />
      <div>
        <button onClick={(e) => handleSubmit(e)}>ADD</button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

//DECLARE ADD HABIT HANDLER FUNCTION
const mapDispatchToProps = (dispatch) => {
  return {
    addHabitHandler: (habit) =>
      dispatch({ type: actionTypes.ADD_TO_HABITS, payload: { habit } }),
  };
};
export default connect(null, mapDispatchToProps)(AddHabit);
