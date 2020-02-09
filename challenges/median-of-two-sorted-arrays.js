/**
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.

Ex 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0

Ex 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
**/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  // initialize an empty array to store the sorted sorted array
  const combinedArray = [];

  // pointer for nums1
  let pointer1 = 0;

  // pointer for nums2
  let pointer2 = 0;

  // initialize midway to half of the length of the combined arrays if the combined length is even else initialize it to the round down value of half of the combined length
  let midway;
  let even;
  if ((nums1.length + nums2.length) % 2 === 0) {
    midway = (nums1.length + nums2.length) / 2;
    even = true;
  } else {
    even = false;
    midway = Math.floor((nums1.length + nums2.length) / 2);
  }

  // sort the array only to midway
  while (pointer1 + pointer2 <= midway) {
    // if the pointers are less than their array length check to see which value should be pushed in
    if (pointer1 < nums1.length && pointer2 < nums2.length) {
      // if the value of num1 at position pointer1 is less than value of num2 at position pointer2
      if (nums1[pointer1] < nums2[pointer2]) {
        // then add the value to the combinedArray
        combinedArray.push(nums1[pointer1]);

        // increment pointer1 by 1
        pointer1 += 1;
      } else {
        // then add the value to the combinedArray
        combinedArray.push(nums2[pointer2]);

        // increment pointer2 by 1
        pointer2 += 1;
      }
    } else if (pointer2 === nums2.length) {
      // if the pointer2 has reach the end of its array, push in nums1 values and increment pointer1
      combinedArray.push(nums1[pointer1]);
      pointer1 += 1;
    } else if (pointer1 === nums1.length) {
      // if the pointer1 has reach the end of its array, push in nums2 values and increment pointer2
      combinedArray.push(nums2[pointer2]);
      pointer2 += 1;
    }
  }

  // if the combined array lengths is even
  if (even) {
    // return the average of the last two values in the combinedArray
    return (
      (combinedArray[combinedArray.length - 1] +
        combinedArray[combinedArray.length - 2]) /
      2
    );
  } else {
    // return the last value in the combinedArray
    return combinedArray[combinedArray.length - 1];
  }
};

//Now solve it with an overall run time complexity should be O(log (m+n))
const findMedianSortedArraysLog = function(nums1, nums2) {
  // set the nums1 to be the smallest array if nums1 is not the smallest array
  if (nums1.length > nums2.length) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  let startIndex = 0;
  let endIndex;
  if (nums1.length === 0) endIndex = 0;
  else endIndex = nums1.length - 1;
  const lengthOne = nums1.length;
  const lengthTwo = nums2.length;
  const maxLength = lengthOne + lengthTwo;
  let partition1 = Math.floor((startIndex + endIndex) / 2);

  let partition2 = Math.floor((maxLength + 1) / 2 - partition1);
  // leftOneIndex is the left of the partition for nums1
  let leftOneIndex;

  // rightOneIndex is the right of the partition for nums1
  let rightOneIndex;

  // leftTwoIndex is the left of the partition for nums2
  let leftTwoIndex;

  // rightTwoIndex is the right of the partition for nums2
  let rightTwoIndex;

  // determine the partition where the value of nums1 at leftOneIndex is less than value of nums2 at rightTwoIndex
  // and the value of nums2 at leftTwoIndex is less than value of nums1 at rightOneIndex
  // when we find the partition, we are in the middle of the combined sorted array
  // the leftOneIndex shall start midway of nums1
  // and leftTwoIndex shall start at the combined length of the arrays + 1 then divided by 2 then minus leftOneIndex
  // if the value of nums1 at leftOneIndex is not less than value of nums2 at rightTwoIndex,
  // then the leftOneIndex needs to move to left and all of the values needs to be reset
  // if the value of nums1 at leftTwoIndex is not less than value of nums1 at rightOneIndex,
  // then the leftOneIndex needs to move to right and all of the values needs to be reset
  // until the first statement has been met
  do {
    leftOneIndex = partition1 - 1;
    rightOneIndex = partition1;
    leftTwoIndex = partition2 - 1;
    rightTwoIndex = partition2;

    if (!nums1.hasOwnProperty(leftOneIndex)) nums1[leftOneIndex] = -Infinity;
    if (!nums2.hasOwnProperty(leftTwoIndex)) nums2[leftTwoIndex] = -Infinity;
    if (!nums1.hasOwnProperty(rightOneIndex)) nums1[rightOneIndex] = Infinity;
    if (!nums2.hasOwnProperty(rightTwoIndex)) nums2[rightTwoIndex] = Infinity;

    if (
      nums1[leftOneIndex] <= nums2[rightTwoIndex] &&
      nums2[leftTwoIndex] <= nums1[rightOneIndex]
    ) {
      return maxLength % 2 === 0
        ? (Math.max(nums1[leftOneIndex], nums2[leftTwoIndex]) +
            Math.min(nums1[rightOneIndex], nums2[rightTwoIndex])) /
            2
        : Math.max(nums1[leftOneIndex], nums2[leftTwoIndex]);
    }
    if (nums1[leftOneIndex] > nums2[rightTwoIndex]) {
      endIndex = partition1 - 1;
      partition1 = Math.floor((startIndex + endIndex) / 2);
      partition2 = Math.floor((maxLength + 1) / 2 - partition1);
    } else if (nums2[leftTwoIndex] > nums1[rightOneIndex]) {
      startIndex = partition1 + 1;
      if (startIndex >= nums1.length) partition1 = startIndex;
      else partition1 = Math.floor((startIndex + endIndex) / 2);
      partition2 = Math.floor((maxLength + 1) / 2 - partition1);
    }
  } while (partition1 <= lengthOne);
};

module.exports = { findMedianSortedArrays, findMedianSortedArraysLog };
