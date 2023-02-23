// Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let ptr1 = m - 1;
  let ptr2 = n - 1;
  let k = m + n - 1;
  while (k >= 0 && ptr1 >= 0 && ptr2 >= 0) {
    if (nums2[ptr2] > nums1[ptr1]) {
      nums1[k] = nums2[ptr2];
      ptr2--;
      k--;
    } else {
      nums1[k] = nums1[ptr1];
      ptr1--;
      k--;
    }
  }
  while (ptr2 >= 0) {
    nums1[k] = nums2[ptr2];
    ptr2--;
    k--;
  }
};
