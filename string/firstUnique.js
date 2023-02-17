// First Unique

const firstUniqChar = function (s) {
  const mapDict = {};
  const stringList = s.split("");
  for (let [index, char] of stringList.entries()) {
    if (mapDict[char] !== undefined) {
      mapDict[char][1] += 1;
    } else {
      mapDict[char] = [index, 1];
    }
  }
  for (let key in mapDict) {
    if (mapDict[key][1] === 1) return mapDict[key][0];
  }
  return -1;
};

// const s = "leetcode";
// const s = "loveleetcode";
const s = "aabb";
console.log(firstUniqChar(s));
