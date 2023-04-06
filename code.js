class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countGoodNodes(root) {
  let count = 0;

  function traverse(node, max) {
    if (!node) {
      return;
    }

    if (node.value >= max) {
      count++;
      max = node.value;
    }

    traverse(node.left, max);
    traverse(node.right, max);
  }

  traverse(root, -Infinity);
  return count;
}
