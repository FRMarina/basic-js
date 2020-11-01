const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let cats = 0;
  array.forEach((element) => {
    element.forEach(function (e) {
      if (e === "^^") {
        cats += 1;
      } else {
        return 0;
      }
    });
  });
  return cats;
};
