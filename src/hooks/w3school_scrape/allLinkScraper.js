import { toast } from "react-toastify";

const request = require('request');
const cheerio = require('cheerio');
const customToastId = "all-links-custom-id";

let allLinkScraper = {
    scrape: () => {
        let proxyurl = "https://cors-anywhere.herokuapp.com/"
        let url = 'https://www.w3schools.com/'
        request(proxyurl + url, (error, response, data) => {
            let webContent = cheerio.load(data);
            let links = webContent('a'); //jquery get all hyperlinks
            webContent(links).each((index, link) => {
                if (webContent(link).text().split(' ')[0].toLowerCase() === 'learn')
                toast.success(
                  webContent(link).text() +
                    ":  " +
                    url +
                    webContent(link).attr("href"),
                  {
                    toastId: customToastId,
                  }
                );
                console.log("Index: " + index + "\n")
            });
        });
    }
}

export default allLinkScraper
