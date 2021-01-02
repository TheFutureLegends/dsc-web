import request from "request";
import cheerio from "cheerio";
import axios from "axios";

let uri = "https://www.w3schools.com/";

let resultList = [];

let numberOfTutorial = 0;

const doCall = (uri, resultList, numberOfTutorial) => {
  request(uri, { mode: "no-cors" }, function (error, response, body) {
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
  });

  return numberOfTutorial;
};

doCall(uri, resultList, numberOfTutorial);

export default doCall;
