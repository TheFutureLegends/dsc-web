import request from "request";
import cheerio from "cheerio";

import { SET_NUMBER_OF_TUTORIAL } from "../types/bot.types.js";

export const getNumberOfTutorial = () => async (dispatch) => {
  const urlToCall = "https://www.w3schools.com/";

  let resultList = [];

  let numberOfTutorial = 0;

  request(urlToCall, { mode: "no-cors" }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const cheerioLoad = cheerio.load(body);

      const tutorialClass = cheerioLoad(".w3-bar-block");
      // Text of the Tutorial Menu Bar
      const tutorialListText = tutorialClass.text();

      const listTutorialName = tutorialListText.split("\n");

      let tutorialName;

      for (tutorialName of listTutorialName) {
        if (tutorialName.split(" ")[1] === "Learn") {
          resultList.push(tutorialName);
        }
      }
    }

    numberOfTutorial = resultList.length;

    console.log(
      "Inside function, out of if else statement: ",
      numberOfTutorial
    );

    dispatch({ type: SET_NUMBER_OF_TUTORIAL, payload: resultList.length });
  });
};
