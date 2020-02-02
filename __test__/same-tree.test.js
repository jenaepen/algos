const {isSameTree,isSameTree2 } = require("../challenges/same-tree.js")

function TreeNode(val) {
    this.val = val;
   this.left = this.right = null;
}
let nodeOne = new TreeNode(1);
let nodeTwo = new TreeNode(2);
let nodeThree = new TreeNode(3);
nodeOne.left = nodeTwo;
nodeOne.right = nodeThree;

let nodeOne2 = new TreeNode(1);
let nodeTwo2 = new TreeNode(2);
nodeOne2.right = nodeTwo2;

describe('isSameTree test', () => {
    
    it(' isSameTree(nodeOne,nodeOne) to equal true', () => {
        expect(isSameTree(nodeOne,nodeOne)).toBe(true);
    });

    it(' isSameTree(nodeOne,nodeOne2) to equal false', () => {
        expect(isSameTree(nodeOne,nodeOne2)).toBe(false);
    });
})


describe('isSameTree2 test', () => {
    
    it(' isSameTree2(nodeOne,nodeOne) to equal true', () => {
        expect(isSameTree2(nodeOne,nodeOne)).toBe(true);
    });

    it(' isSameTree2(nodeOne,nodeOne2) to equal false', () => {
        expect(isSameTree2(nodeOne,nodeOne2)).toBe(false);
    });
})