/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    function recursion(node: TreeNode | null, remaining: number) {
        if (node === null) return false;
        if (node.left === null && node.right === null) {
            return remaining === node.val;
        }

        const next = remaining - node.val;
        return recursion(node.left, next) || recursion(node.right, next);
    }

    return recursion(root, targetSum);
};