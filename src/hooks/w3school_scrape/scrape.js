const request = require('request')
const cheerio = require('cheerio')

let uri = 'https://www.w3schools.com/'
let resultList = []
let numberOfTutorial
request(uri, (error, response, html) => {
    if (!error && response.statusCode === 200) {
        const cheerioLoad = cheerio.load(html)
        const tutorialClass = cheerioLoad('.w3-bar-block')
        // Text of the Tutorial Menu Bar
        const tutorialListText = tutorialClass.text()
        console.log(tutorialListText)
        console.log('Type of the text:' + typeof tutorialListText)
        const listTutorialName = tutorialListText.split('\n')
        let tutorialName
        for (tutorialName of listTutorialName){
            if (tutorialName.split(' ')[1] === "Learn"){
                resultList.push(tutorialName)
            }
        }
        numberOfTutorial = resultList.length
        console.log(resultList)
        console.log(numberOfTutorial)
    }
})