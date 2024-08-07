function hideWhitespace() {
  const url = new URL(window.location);
  if (
    !url.searchParams.has("w") &&
    url.href.split("/").length >= 7 // 7 because the format is https://github.com/owner/repo/mode/...identifierAndOtherStuff when we may want w=1, which means a min of 6 "/"s and thus a min of 7 chunks when split
  ) {
    url.searchParams.set("w", "1");
    window.history.replaceState({}, "", url.toString());
    window.location.reload();
  }
}

hideWhitespace();
setInterval(hideWhitespace, 100);
