/*
In this challenge, you need to fetch data from the SpaceX api
See API docs here: https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs

*/

const { default: axios } = require("axios");

// Write your code here:
const run = async () => {
  const data = await axios.get("https://api.spacexdata.com/v4/launches");

  return data;
};

run().then((data) => console.log(data));

// Below console.log() all of the launches
console.log("All Launches");

// Below console.log() all of the launch Ids within the last two months
console.log("Recent Launches");
