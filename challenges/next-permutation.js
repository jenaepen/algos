/*

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
//https://www.youtube.com/watch?v=quAS1iydq7U
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
  if (nums.length === 1) return nums;

  let value = nums[nums.length - 1];
  let index;

  //found the value
  let found = false;

  // iterate over the array to find the index where the value is drops down after ascending the reverse direction
  for (let i = nums.length - 2; i >= 0 && !found; i -= 1) {
    if (nums[i] >= value) {
      value = nums[i];
    } else {
      value = nums[i];
      index = i;
      found = true;
    }
  }

  let nextIndex = nums.length - 1;

  while (nums[nextIndex] < value) {
    nextIndex -= 1;
  }

  let temp = nums[index];
  nums[index] = nums[nextIndex];
  nums[nextIndex] = temp;

  for (let i = index; i < nums.length - 1; i += 1) {
    let temp = nums[i + 1];
    nums[i + 1] = nums[nums.length - 1 - (i - index)];
    nums[nums.length - 1 - (i - index)] = temp;
  }
};

module.exports = nextPermutation;
