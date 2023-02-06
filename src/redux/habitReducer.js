import * as actionTypes from "./actions";

//DECLARE THE INITIALSTATE
const initialState = {
  habits: [
    // {
    //   id: 1,
    //   title: " cycling",
    //   description: "do cycling",
    //   weekStatus: ["none", "none", "none", "none", "none", "none", "none"],
    // },
  ],
};

//DEFINE THE REDUCER FUNCTION
const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_HABITS:
      return {
        ...state,
        habits: [...state.habits, action.payload.habit],
      };

    case actionTypes.REMOVE_FROM_HABITS:
      return {
        ...state,
        habits: state.habits.filter((h) => {
          return h.id !== action.payload.id;
        }),
      };

    case actionTypes.UPDATE_STATUS:
      let updatedHabits = state.habits.map((h) => {
        if (h.id === action.payload.id) {
          h.weekStatus[action.payload.index] = action.payload.status;
        }
        return h;
      });

      return { ...state, habits: updatedHabits };

    default:
      return state;
  }
};

export default habitReducer;
