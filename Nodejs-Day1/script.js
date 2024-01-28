const  { writeFile } = require("node:fs/promises");

try {
  var curr_date = new Date();
  var fileData = {
    date: curr_date.getDate(),
    hour: curr_date.getHours(),
    minutes: curr_date.getMinutes()
  }
    writeFile(
      `${fileData.date}-${fileData.hour}-${fileData.minutes}.txt`, curr_date.toString()
      )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  // Abort the request before the promise settles.

} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
} 