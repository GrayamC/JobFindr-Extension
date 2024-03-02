export function getJobs(commuteDropdown, expDropdown, jobTitle) {
  const apiKey = "AIzaSyCQs786_-uUN3DtptceBa9dn0mnXeGOoL4";
  const searchEngineId = "633e90580c48f46ff";
  const searchTerm = `site:lever.co OR site:greenhouse.io 
${commuteDropdown}
${expDropdown}
${jobTitle}`;
  // Use 1 for the first page, 11 for the second page, and so on.

  // Construct the URL for the API request
  const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${searchTerm}&start=1`;
  // Make the API request using fetch

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occur during the API request
      console.error("Error:", error);
    });
  function setSearched() {
    searched == true;
  }
  setSearched();
}
