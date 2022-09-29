/*
In this challenge, you need to fetch data from the SpaceX api
See API docs here: https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs

*/

const { default: axios } = require("axios");

// Write your code here, I've gotten it started for you:
const run = async () => {
  const data = await axios.get("https://api.spacexdata.com/v4/launches");

  return data;
};

// Below console.log() an array of the launch.details for each launch
console.log("All Launches");

// Below console.log() all of the launches within the last 60 days
// Log only the launch Ids and launch dates formatted as an dd/mm/yyyy
console.log("Recent Launches");
