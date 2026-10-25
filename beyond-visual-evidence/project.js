const copyButton = document.querySelector('#copy-citation');

copyButton?.addEventListener('click', async () => {
  const citation = copyButton.querySelector('pre')?.textContent.trim() || '';
  const hint = copyButton.querySelector('.copy-hint');

  try {
    await navigator.clipboard.writeText(citation);
    hint.textContent = '✓ BibTeX copied successfully.';
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = citation;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    hint.textContent = '✓ BibTeX copied successfully.';
  }

  window.setTimeout(() => {
    hint.textContent = '🖱️ Click here to copy BibTeX.';
  }, 1800);
});
