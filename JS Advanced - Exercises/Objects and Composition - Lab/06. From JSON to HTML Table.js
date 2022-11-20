function fromJsonToHtmlTable(json) {
  const data = JSON.parse(json);

  let result = `<table>`;
  let firstRoll = ` \n   <tr>`;
  for (let key of Object.keys(data[0])) {
    firstRoll += `<th>${key}</th>`;
  }
  firstRoll += "</tr>";
  result += firstRoll;
  for (let obj of data) {
    let newRoll = `\n   <tr>`;

    for (let key of Object.keys(obj)) {
      if (typeof obj[key] == "string") {
        obj[key] = escape(obj[key]);
      }
      newRoll += `<td>${obj[key]}</td>`;
    }
    newRoll += "</tr>";
    result += newRoll;
  }

  result += `\n</table>`;
  console.log(result);

  function escape(htmlStr) {
    return htmlStr
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}

fromJsonToHtmlTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);
