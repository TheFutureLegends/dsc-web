import {useEffect, useState, useCallback} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web"
import programmingLanguageScraper from "./w3school_scrape/prorammingLanguageTutorialScrape.js";
import allLinkScraper from "./w3school_scrape/allLinkScraper";
import oneLinkScraper from "./w3school_scrape/oneLinkScraper";
import { INTENTS } from './intents'

// Use asynchronous to make the bot says before the alert popup
let key = '16719338d8e08c6aff8745f74935071f2e956eca572e1d8b807a3e2338fdd0dc/stage'
export default function useAlan(){
    const [alanInstance, setAlanInstance] = useState()

    // Give the answers
    const showAllLinks = useCallback(() => {
        alanInstance.playText("Links are")
        allLinkScraper.scape()
    }, [alanInstance])
    const showNumberOfTutorial = useCallback(() => {
        alanInstance.playText("These are number of tutorial that I know")
        programmingLanguageScraper.scape()
    }, [alanInstance])
    const showJavaInfo = useCallback(() => {
        alanInstance.playText(" If you want to learn more about Java please follow the link ")
        oneLinkScraper.scapeWithKeyWord(INTENTS.JAVA)
    }, [alanInstance])

    const showPhpInfo = useCallback(() => {
        alanInstance.playText("If you want to learn more about PHP please follow the link")
        oneLinkScraper.scapeWithKeyWord(INTENTS.PHP)
    }, [alanInstance])

    const showPythonInfo = useCallback(() => {
        alanInstance.playText("If you want to learn more about Python please follow the link")
        oneLinkScraper.scapeWithKeyWord(INTENTS.PYTHON)
    }, [alanInstance])

    const showJavascriptInfo = useCallback(() => {
        alanInstance.playText("If you want to learn more about Python please follow the link")
        oneLinkScraper.scapeWithKeyWord(INTENTS.JAVASCRIPT)
    }, [alanInstance])

    const showRInfo = useCallback(() => {
        alanInstance.playText("If you want to learn more about Python please follow the link")
        oneLinkScraper.scapeWithKeyWord(INTENTS.R)
    }, [alanInstance])

    const showHtmlInfo = useCallback(() => {
        alanInstance.playText("If you want to learn more about Python please follow the link")
        oneLinkScraper.scapeWithKeyWord(INTENTS.HTML)
    }, [alanInstance])

    const showCssInfo = useCallback(() => {
        alanInstance.playText("If you want to learn more about Python please follow the link")
        oneLinkScraper.scapeWithKeyWord(INTENTS.CSS)
    }, [alanInstance])

    // Add event Listener. For each commands, each answers will be given

    useEffect(() => {
        window.addEventListener(INTENTS.SHOW_NUMBER_OF_TUTORIAL, showNumberOfTutorial)
        window.addEventListener(INTENTS.JAVA, showJavaInfo)
        window.addEventListener(INTENTS.PHP, showPhpInfo)
        window.addEventListener(INTENTS.PYTHON, showPythonInfo)
        window.addEventListener(INTENTS.JAVASCRIPT, showJavascriptInfo)
        window.addEventListener(INTENTS.R, showRInfo)
        window.addEventListener(INTENTS.HTML, showHtmlInfo)
        window.addEventListener(INTENTS.CSS, showCssInfo)
        window.addEventListener(INTENTS.SHOW_LINK, showAllLinks)
        return () => {
            window.removeEventListener(INTENTS.SHOW_NUMBER_OF_TUTORIAL, showNumberOfTutorial)
            window.removeEventListener(INTENTS.JAVA, showJavaInfo)
            window.removeEventListener(INTENTS.PHP, showPhpInfo)
            window.removeEventListener(INTENTS.PYTHON, showPythonInfo)
            window.removeEventListener(INTENTS.JAVASCRIPT, showJavascriptInfo)
            window.removeEventListener(INTENTS.R, showRInfo)
            window.removeEventListener(INTENTS.HTML, showHtmlInfo)
            window.removeEventListener(INTENTS.CSS, showCssInfo)
            window.removeEventListener(INTENTS.SHOW_LINK, showAllLinks)
        }
    },[
        showNumberOfTutorial,
        showJavaInfo,
        showPhpInfo,
        showPythonInfo,
        showJavascriptInfo,
        showRInfo,
        showHtmlInfo,
        showCssInfo,
        showAllLinks
    ])

    // Connect this website with Alan AI by the key
    useEffect(() => {
        if (alanInstance != null ) return
        setAlanInstance(
            alanBtn({
                key: key, // get the key to access Alan AI
                onCommand: ({command}) => {
                    window.dispatchEvent(new CustomEvent(command))
                    console.log(command)
                }
            })
        )

    },[])
    return null
}