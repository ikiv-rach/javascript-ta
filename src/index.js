// complete the function
function palindrom(str) {
  // code goes here
  let modifiedStr = str.toLowerCase().replace();
  let newWord = "";
  for (let i = modifiedStr.length - 1; i >= 0; i--) {
    newWord += modifiedStr[i];
  }
  return newWord === modifiedStr;
}
function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
