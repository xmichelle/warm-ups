function removeUrlAnchor(url) {
  const anchorSplit = url.split('#')

  return anchorSplit[0]
}

function removeUrlAnchor2(url) {
  return url.split('#')[0]
}
