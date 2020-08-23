/*
    LeetCode 二叉树的前序遍历
    https://leetcode-cn.com/problems/binary-tree-preorder-traversal/

    给定一个二叉树，返回它的前序 遍历

*/

// 递归遍历
var preorderTraversal = function(root) {
    let result = []
    const preorderLoop = (node) => {
        if(node){
            result.push(node.val)
            preorderLoop(node.left)
            preorderLoop(node.right)
        }
    }
    preorderLoop(root)
    return result
};

// 迭代遍历
var preorderTraversal2 = function(root) {
    let result = []
    let stack = []
    root && stack.push(root)

    while(stack.length > 0) {
        const node = stack.pop()
        result.push(node.val)
        if(node.right !== null){
            stack.push(node.right)
        }
        if(node.left !== null){
            stack.push(node.left)
        }
    }
    return result
};
