// Reverse Integer

const reverse = function (x) {
  const str = `${x}`;
  const strList = str.split("");
  let reversedList = [];
  if (strList[0] == "-") {
    reversedList = ["-", ...strList.slice(1).reverse()];
  } else {
    reversedList = strList.reverse();
  }
  const reversedString = reversedList.join("");
  const number = parseInt(reversedString);
  if (number >= Math.pow(-2, 31) && number <= Math.pow(2, 31) - 1)
    return number;
  return 0;
};

const x = -123;
console.log(reverse(x));
