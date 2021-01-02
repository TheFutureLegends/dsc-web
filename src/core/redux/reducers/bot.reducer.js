import { SET_NUMBER_OF_TUTORIAL } from "../types/bot.types.js";

const initialState = {
  numberOfTutorial: 0,
  tutorials: [],
};

export function BotReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NUMBER_OF_TUTORIAL:
      return {
        ...state,
        numberOfTutorial: action.payload,
      };

    default:
      return state;
  }
}
