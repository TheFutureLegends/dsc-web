import { useEffect, useState, useCallback } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import programmingLanguageScraper from "./w3school_scrape/prorammingLanguageTutorialScrape.js";
import allLinkScraper from "./w3school_scrape/allLinkScraper";
import oneLinkScraper from "./w3school_scrape/oneLinkScraper";
import { INTENTS } from "./intents.js";
import unityLinkScraper from "./coursera/unityLinkScraper.js";
import dataScienceBeginnerLinkScraper from "./coursera/dataScienceBeginnerLinkScraper";
import { toast } from "react-toastify";

// Use asynchronous to make the bot says before the alert popup
let key =
  "16719338d8e08c6aff8745f74935071f2e956eca572e1d8b807a3e2338fdd0dc/stage";

export default function useAlan() {
  const [alanInstance, setAlanInstance] = useState();
  // Give the basic answers:
  const answerWaiting = useCallback(() => {
    alanInstance.playText(
      "I am waiting for your question about learning programming"
    );
    toast.success("You can ask me about programming");
  }, [alanInstance]);
  const answerHowToHelp = useCallback(() => {
    alanInstance.playText(
      "I am your assistant, I can answer questions realted to programming. For other topics, I cannot"
    );
    toast.success("I can answer questions related to programming skills");
  }, [alanInstance]);
  const answerBotVsGoogle = useCallback(() => {
    alanInstance.playText(
      "Google is the search Engine, just lists out every link related to your questions. I will give you the best answer only"
    );
    toast.error("Google: Too many link");
    toast.success("Owl bot: The best answer only");
  }, [alanInstance]);

  // Give the advanced answers
  const showDataScienceBeginner = useCallback(() => {
    alanInstance.playText(
      "You can start with Data Science by following this link"
    );
    dataScienceBeginnerLinkScraper.scrape();
  }, [alanInstance]);
  const showUnityEngine = useCallback(() => {
    alanInstance.playText(
      "You can start with Unity Engine by following this link"
    );
    unityLinkScraper.scrape();
  }, [alanInstance]);
  const showAllLinks = useCallback(() => {
    alanInstance.playText("Links are");
    allLinkScraper.scrape();
  }, [alanInstance]);
  const showNumberOfTutorial = useCallback(() => {
    alanInstance.playText(
      "These are number of programming languages that I know"
    );
    programmingLanguageScraper.scrape();
  }, [alanInstance]);
  const showJavaInfo = useCallback(() => {
    alanInstance.playText(
      " If you want to learn more about Java please follow the link "
    );
    oneLinkScraper.scrapeWithKeyWord(INTENTS.JAVA);
  }, [alanInstance]);

  const showPhpInfo = useCallback(() => {
    alanInstance.playText(
      "If you want to learn more about PHP please follow the link"
    );
    oneLinkScraper.scrapeWithKeyWord(INTENTS.PHP);
  }, [alanInstance]);

  const showPythonInfo = useCallback(() => {
    alanInstance.playText(
      "If you want to learn more about Python please follow the link"
    );
    oneLinkScraper.scrapeWithKeyWord(INTENTS.PYTHON);
  }, [alanInstance]);

  const showJavascriptInfo = useCallback(() => {
    alanInstance.playText(
      "If you want to learn more about Python please follow the link"
    );
    oneLinkScraper.scrapeWithKeyWord(INTENTS.JAVASCRIPT);
  }, [alanInstance]);

  const showRInfo = useCallback(() => {
    alanInstance.playText(
      "If you want to learn more about Python please follow the link"
    );
    oneLinkScraper.scrapeWithKeyWord(INTENTS.R);
  }, [alanInstance]);

  const showHtmlInfo = useCallback(() => {
    alanInstance.playText(
      "If you want to learn more about Python please follow the link"
    );
    oneLinkScraper.scrapeWithKeyWord(INTENTS.HTML);
  }, [alanInstance]);

  const showCssInfo = useCallback(() => {
    alanInstance.playText(
      "If you want to learn more about Python please follow the link"
    );
    oneLinkScraper.scrapeWithKeyWord(INTENTS.CSS);
  }, [alanInstance]);

  // Add event Listener. For each commands, each answers will be given

  useEffect(() => {
    window.addEventListener(INTENTS.HOW_TO_HELP, answerHowToHelp);
    window.addEventListener(INTENTS.BOT_VS_GOOGLE, answerBotVsGoogle);
    window.addEventListener(INTENTS.WAITING, answerWaiting);
    window.addEventListener(
      INTENTS.DATA_SCIENCE_BEGINNER,
      showDataScienceBeginner
    );
    window.addEventListener(INTENTS.SHOW_UNITY_ENGINE, showUnityEngine);
    window.addEventListener(
      INTENTS.SHOW_NUMBER_OF_TUTORIAL,
      showNumberOfTutorial
    );
    window.addEventListener(INTENTS.JAVA, showJavaInfo);
    window.addEventListener(INTENTS.PHP, showPhpInfo);
    window.addEventListener(INTENTS.PYTHON, showPythonInfo);
    window.addEventListener(INTENTS.JAVASCRIPT, showJavascriptInfo);
    window.addEventListener(INTENTS.R, showRInfo);
    window.addEventListener(INTENTS.HTML, showHtmlInfo);
    window.addEventListener(INTENTS.CSS, showCssInfo);
    window.addEventListener(INTENTS.SHOW_LINK, showAllLinks);
    return () => {
      window.removeEventListener(INTENTS.HOW_TO_HELP, answerHowToHelp);
      window.removeEventListener(INTENTS.BOT_VS_GOOGLE, answerBotVsGoogle);
      window.removeEventListener(INTENTS.WAITING, answerWaiting);
      window.removeEventListener(
        INTENTS.DATA_SCIENCE_BEGINNER,
        showDataScienceBeginner
      );
      window.removeEventListener(INTENTS.SHOW_UNITY_ENGINE, showUnityEngine);
      window.removeEventListener(
        INTENTS.SHOW_NUMBER_OF_TUTORIAL,
        showNumberOfTutorial
      );
      window.removeEventListener(INTENTS.JAVA, showJavaInfo);
      window.removeEventListener(INTENTS.PHP, showPhpInfo);
      window.removeEventListener(INTENTS.PYTHON, showPythonInfo);
      window.removeEventListener(INTENTS.JAVASCRIPT, showJavascriptInfo);
      window.removeEventListener(INTENTS.R, showRInfo);
      window.removeEventListener(INTENTS.HTML, showHtmlInfo);
      window.removeEventListener(INTENTS.CSS, showCssInfo);
      window.removeEventListener(INTENTS.SHOW_LINK, showAllLinks);
    };
  }, [
    answerHowToHelp,
    answerBotVsGoogle,
    answerWaiting,
    showNumberOfTutorial,
    showJavaInfo,
    showPhpInfo,
    showPythonInfo,
    showJavascriptInfo,
    showRInfo,
    showHtmlInfo,
    showCssInfo,
    showAllLinks,
    showUnityEngine,
    showDataScienceBeginner,
  ]);

  // Connect this website with Alan AI by the key
  useEffect(() => {
    if (alanInstance != null) return;
    setAlanInstance(
      alanBtn({
        key: key, // get the key to access Alan AI
        onCommand: ({ command }) => {
          window.dispatchEvent(new CustomEvent(command));
        },
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
