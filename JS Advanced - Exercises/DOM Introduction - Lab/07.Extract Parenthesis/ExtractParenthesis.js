function extract(content) {
  let pattern = /\((.+?)\)/g;
  let text = document.getElementById(content).textContent;
  let result = [];
  let match = pattern.exec(text);
  while (match != null) {
    result.push(match[1]);
    match = pattern.exec(text);
  }
  return result.join(", ");
}
