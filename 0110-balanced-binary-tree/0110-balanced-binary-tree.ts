function isBalanced(root: TreeNode | null): boolean {
  function checkHeight(node: TreeNode | null): number {
    if (node === null) return 0;

    const left = checkHeight(node.left);
    if (left === -1) return -1;

    const right = checkHeight(node.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  }
  return checkHeight(root) !== -1;
}