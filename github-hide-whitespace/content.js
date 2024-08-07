function hideWhitespace() {
  const url = new URL(window.location);
  if (!url.searchParams.has("w")) {
    url.searchParams.set("w", "1");
    window.history.replaceState({}, "", url.toString());
    window.location.reload();
  }
}

hideWhitespace();
setInterval(hideWhitespace, 100);
