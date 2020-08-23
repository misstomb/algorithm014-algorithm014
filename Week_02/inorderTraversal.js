/*
    LeetCode 二叉树的中序遍历
    https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

    给定一个二叉树，返回它的中序 遍历

*/

// 递归遍历
var inorderTraversal = function(root) {
    let result = []
    const inorderLoop = (node) => {
        if(node){
            inorderLoop(node.left)
            result.push(node.val)
            inorderLoop(node.right)
        }
    }
    inorderLoop(root)
    return result
};

// 迭代遍历
var inorderTraversal2 = function(root) {
    let result = []
    let stack = []
    let currentRoot = root

    while(stack.length > 0  || currentRoot) {
        if(currentRoot){
            stack.push(currentRoot)
            currentRoot = currentRoot.left
        } else{
            let node = stack.pop()
            result.push(node.val)
            currentRoot = node.right
        }
    }
    return result
};
