const copyButton = document.getElementById("copy-citation");
const bibtex = document.getElementById("bibtex");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(bibtex.textContent.trim());
    copyButton.textContent = "Copied";
    setTimeout(() => { copyButton.textContent = "Copy BibTeX"; }, 1800);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(bibtex);
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = "Selected";
  }
});
