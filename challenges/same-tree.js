/**
 * Given two binary trees, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical 
 * and the nodes have the same value.
 *  
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  // iterate over the tree with recursion to see if the values are the same
  return (function isSameTreeRecall(node1,node2){

    // base case if the iteration finish, return true  
    if(node1 === null && node2 === null) return true;
     // if a value is not the same, return false
    if(!node1 || !node2){
        return false;
    }

    if(node1.val !== node2.val){
        return false;
    }

    let leftValue = isSameTreeRecall(node1.left,node2.left); 
    let rightValue = isSameTreeRecall(node1.right,node2.right);
    

    
    return (leftValue && rightValue);
  } )(p,q)
 
};

const isSameTree2 = function(p, q) {
    // p and q are both null
    if (p === null && q === null) return true;
    // one of p and q is null
    if (q === null || p === null) return false;
    if (p.val !== q.val) return false;
    return isSameTree2(p.right, q.right) &&
            isSameTree2(p.left, q.left)
}

module.exports = {isSameTree,isSameTree2 };