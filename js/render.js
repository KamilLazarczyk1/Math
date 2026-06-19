// Render all LaTeX on the page once the DOM is ready, using local KaTeX.
document.addEventListener("DOMContentLoaded", function () {
  if (typeof renderMathInElement !== "function") return;
  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false },
      { left: "$", right: "$", display: false }
    ],
    // keep going even if one expression has a typo, so the rest still renders
    throwOnError: false,
    errorColor: "#d33d3d",
    strict: false
  });
});
