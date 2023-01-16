function matchFullName(text) {
  const pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  const result = [];
  let match = pattern.exec(text);
  while (match != null) {
    result.push(match);
    match = pattern.exec(text);
  }

  console.log(result.join(" "));
}

matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
