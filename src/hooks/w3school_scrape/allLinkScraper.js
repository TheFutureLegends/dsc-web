const request = require('request');
const cheerio = require('cheerio');

let allLinkScraper = {
    scape: () => {
        let proxyurl = "https://cors-anywhere.herokuapp.com/"
        let url = 'https://www.w3schools.com/'
        request(proxyurl + url, (error, response, data) => {
            let webContent = cheerio.load(data);
            let links = webContent('a'); //jquery get all hyperlinks
            webContent(links).each((index, link) => {
                console.log(webContent(link).text() + ':  ' + url + webContent(link).attr('href'));
                console.log("Index: " + index + "\n")
            });
        });
    }
}

export default allLinkScraper
