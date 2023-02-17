// IntersectionOfTwoArraysII

const intersectionOfTwoArraysII = function (nums1, nums2) {
  let smallList = [];
  let bigList = [];
  const intersection = [];
  if (nums1.length > nums2.length) {
    smallList = nums2;
    bigList = nums1;
  } else {
    smallList = nums1;
    bigList = nums2;
  }

  for (let num of smallList) {
    const index = bigList.indexOf(num);
    if (index !== -1) {
      intersection.push(num);
      bigList.splice(index, 1);
    }
  }

  return intersection;
};

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

const intersection = intersectionOfTwoArraysII(nums1, nums2);

console.log(intersection);
