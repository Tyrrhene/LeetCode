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

function isSymmetric(root: TreeNode | null): boolean {
    function mirror(a: TreeNode | null, b: TreeNode | null): boolean {
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;
    if (a.val !== b.val) return false;

    return mirror(a.left, b.right) && mirror(a.right, b.left);
    }
    
    return mirror(root, root);
};