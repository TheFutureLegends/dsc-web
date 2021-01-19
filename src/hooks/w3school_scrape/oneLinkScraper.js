import { Link } from "react";
import { toast } from "react-toastify";

const request = require("request");

const cheerio = require("cheerio");

const customHTMLLink = (title, url) => (
  <div>
    Click <Link to={url}>here</Link> to open {title} resource.
  </div>
);

let botSays = (title, url) => {
  setTimeout(() => {
    toast.success(title + ": " + customHTMLLink(title, url), {
      toastId: "one-link-scrapper",
    });
  });
};

let oneLinkScraper = {
  scrapeWithKeyWord: (keyword) => {
    let proxyurl = "https://cors-anywhere.herokuapp.com/";
    let url = "https://www.w3schools.com/";
    request(proxyurl + url, (error, response, data) => {
      let webContent = cheerio.load(data);
      let links = webContent("a"); //jquery get all hyperlinks
      webContent(links).each((index, link) => {
        if (webContent(link).text().toLowerCase() === keyword.toLowerCase()) {
          botSays(webContent(link).text(), url + webContent(link).attr("href"));
        }
      });
    });
  },
};

export default oneLinkScraper;
