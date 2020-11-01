const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = "";
  if (Array.isArray(members) === false) {
    return false;
  } else {
    let sortArr = members.map((e) =>
      typeof e !== "string" ? e : e.trim().toUpperCase()
    );
    sortArr.forEach(function (element) {
      if (typeof element === "string") {
        result += element[0];
      } else {
        return;
      }
    });
  }
  return result.split("").sort().join("");
};
