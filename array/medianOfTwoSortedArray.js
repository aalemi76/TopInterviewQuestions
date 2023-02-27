// Median of Two Sorted Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  // Total lenght of combined arrays
  const len = nums1.length + nums2.length;
  // Median index in combined array
  const mid = Math.floor(len / 2);

  // nums1 counter
  let i = 0;
  // nums2 counter
  let j = 0;

  let k = 0;

  let currMed, prevMed;

  // Loop until we reach the mid index
  while (k <= mid) {
    prevMed = currMed;
    if (
      nums2[j] === undefined ||
      (nums1[i] !== undefined && nums1[i] < nums2[j])
    ) {
      currMed = nums1[i];
      i++;
    } else {
      currMed = nums2[j];
      j++;
    }
    k++;
  }
  if (len % 2 === 0) {
    return (currMed + prevMed) / 2;
  } else {
    return currMed;
  }
};

// [1,2] [3,4]
// [3,4] [1,2]

console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 4, 4]));
