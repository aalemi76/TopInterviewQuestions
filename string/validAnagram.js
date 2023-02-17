// Valid Anagram

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sMap = makeMap(s);
  const tMap = makeMap(t);
  for (let key in sMap) {
    if (sMap[key] !== tMap[key]) return false;
  }
  return true;
};

const makeMap = function (str) {
  const map = {};
  for (let character of str) {
    if (map[character] !== undefined) {
      map[character] += 1;
    } else {
      map[character] = 1;
    }
  }
  return map;
};
// const s = "anagram";
// const t = "nagaram";

// const s = "rat";
// const t = "car";

const s = "aacc";
const t = "ccac";
console.log(isAnagram(s, t));
