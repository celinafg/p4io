// Custom component functions or HTML element creators
export const overviewComponent = (properties, children) => {
  return {
    type: "element",
    tagName: "div",
    properties: { className: ["overview"] },
    children: children,
  };
};

export const columnComponent = (properties, children) => {
  return {
    type: "element",
    tagName: "div",
    properties: { className: ["column"] },
    children: children,
  };
};
