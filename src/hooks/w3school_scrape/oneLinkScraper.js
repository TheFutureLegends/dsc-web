import request from "request";
import cheerio from "cheerio";
import { success } from "../../components/Toastify/Toastify.js";

const Msg = ({ title, url }) => (
  <div>
    {title}:{"\n"}
    Click{" "}
    <a
      href={url}
      rel="noreferrer"
      className="toastify-resource-anchor"
      target="_blank"
    >
      here
    </a>{" "}
    to open {title} resource
  </div>
);

let botSays = (title, url) => {
  setTimeout(() => {
    success(<Msg title={title} url={url} />);
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
