
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let firstLetter = '';

  if (!Array.isArray(members) || members.length === 0) return false;


  members.forEach(el => {
    if (typeof el === 'string') {
      let str = el.trimLeft();
      firstLetter += str[0];
    }
  })
  res = firstLetter.toUpperCase();
  return (res.split('').sort().join(''));
};