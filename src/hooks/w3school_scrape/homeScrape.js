const request = require('request')
const cheerio = require('cheerio')

let botSays = (answer) => {
    setTimeout(() => {
        window.alert(answer)
    }, 3000)
}

let homeScraper = {
    scape: function homeScraper() {
        let uri = 'https://www.w3schools.com/'
        request(uri, (error, response, html) => {
            let resultList = []
            let numberOfTutorial
            if (!error && response.statusCode === 200) {
                const cheerioLoad = cheerio.load(html)
                const tutorialClass = cheerioLoad('.w3-bar-block')
                // Text of the Tutorial Menu Bar
                const tutorialListText = tutorialClass.text()
                console.log(tutorialListText)
                console.log('Type of the text:' + typeof tutorialListText)
                const listTutorialName = tutorialListText.split('\n')
                let tutorialName
                for (tutorialName of listTutorialName) {
                    if (tutorialName.split(' ')[1] === "Learn") {
                        resultList.push(tutorialName)
                    }
                }
                numberOfTutorial = resultList.length
                console.log(numberOfTutorial)
                botSays('Number of tutorial that I know:' + numberOfTutorial)
            }
        })
    }
}

export default homeScraper