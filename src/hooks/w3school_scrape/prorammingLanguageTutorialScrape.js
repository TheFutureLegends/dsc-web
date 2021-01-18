import { toast } from "react-toastify";

const request = require("request");
const cheerio = require("cheerio");

let botSays = (answer) => {
  setTimeout(() => {
    window.alert(answer);
  }, 3000);
};

let programmingLanguageTutorialScraper = {
  scrape: function homeScraper() {
    let proxyurl = "https://cors-anywhere.herokuapp.com/";
    let uri = "https://www.w3schools.com/";
    request(proxyurl + uri, (error, response, data) => {
      let resultList = [];
      let numberOfTutorial;
      if (!error && response.statusCode === 200) {
        const cheerioLoad = cheerio.load(data);
        // Scrap the tutorial menu
        const tutorialClass = cheerioLoad(".w3-bar-block");
        // Take out text of the Tutorial Menu Bar
        const tutorialListText = tutorialClass.text();

        const listTutorialName = tutorialListText.split("\n");
        let tutorialName;
        for (tutorialName of listTutorialName) {
          if (tutorialName.split(" ")[1] === "Learn") {
            resultList.push(tutorialName);
          }
        }
        numberOfTutorial = resultList.length;

        toast.success(
          "Number of programming language that I know:" + numberOfTutorial,
          {
            position: toast.POSITION.BOTTOM_RIGHT,
          }
        );
      }
    });
  },
};

export default programmingLanguageTutorialScraper;
