const os = require("os");
let currUser = os.userInfo();
let date = new Date();
let currTime = date.getHours();
function helloUser () {
    if (currTime >= 23 || currTime < 5) {
        return ("Good night, " + `${currUser.username}`);
    } else 
    if (currTime >= 5 && currTime < 12) {
        return ("Good morning, " + `${currUser.username}`);
    } else
    if (currTime >= 12 && currTime < 18) {
        return ("Good afternoon, " + `${currUser.username}`);
    } else
    if (currTime >= 18 && currTime < 23) {
        return ("Good evening, " + `${currUser.username}`);
    }
  }
  module.exports = {
    helloUser
  }