import { visit } from "unist-util-visit";

function remarkHighlight() {
  return (tree) => {
    visit(tree, "text", (node, index, parent) => {
      const regex = /==([^=]+)==/g;
      let match;
      const nodes = [];
      let lastIndex = 0;

      while ((match = regex.exec(node.value)) !== null) {
        const beforeText = node.value.slice(lastIndex, match.index);
        const highlightedText = match[1];
        const afterTextStart = match.index + match[0].length;
        lastIndex = afterTextStart;

        if (beforeText) {
          nodes.push({ type: "text", value: beforeText });
        }

        nodes.push({
          type: "html",
          value: `<span class="highlight">${highlightedText}</span>`,
        });
      }

      if (lastIndex < node.value.length) {
        nodes.push({ type: "text", value: node.value.slice(lastIndex) });
      }

      if (nodes.length > 0) {
        parent.children.splice(index, 1, ...nodes);
      }
    });
  };
}

export default remarkHighlight;
