window.onerror = (_event, _source, _lineno, _colno, err) => {
  const ErrorOverlay = customElements.get("vite-error-overlay");

  if (ErrorOverlay) {
    const overlay = new ErrorOverlay(err);
    document.body.appendChild(overlay);
  }
};
