/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = function(root) {
  let maxValue = -Infinity;
  (function maxPath(head) {
    //base case there is no more left and no more right
    if (head === null) return 0;
    let leftside = Math.max(maxPath(head.left), 0);
    let rightside = Math.max(maxPath(head.right), 0);
    maxValue = Math.max(maxValue, leftside + rightside + head.val);
    return head.val + Math.max(leftside, rightside);
  })(root);
  return maxValue;
};

module.export = maxPathSum;
