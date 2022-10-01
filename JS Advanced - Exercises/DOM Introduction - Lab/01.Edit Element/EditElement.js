function editElement(ref, match, replacer) {
  let text = ref.textContent;
  let result = text.split(match).join(replacer);
  ref.textContent = result;
}
