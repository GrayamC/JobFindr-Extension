import "../MainButton/MainButton";
import "../Dropdowns/dropdowns";

export default function getJobs(startIndex) {
  const expDropdown = document.getElementById("exp");
  const commuteDropdown = document.getElementById("commute");
  const jobTitle = document.getElementById("title");
  const apiKey = "AIzaSyCQs786_-uUN3DtptceBa9dn0mnXeGOoL4";
  const searchEngineId = "661749077244";
  const searchTerm =
    "site:lever.co OR site:greenhouse.io" +
    { commuteDropdown } +
    { expDropdown } +
    { jobTitle };
  // Use 1 for the first page, 11 for the second page, and so on.

  // Construct the URL for the API request
  const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${searchTerm}&start=${startIndex}`;

  // Make the API request using fetch
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Process the data returned by the API
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occur during the API request
      console.error("Error:", error);
    });
}
