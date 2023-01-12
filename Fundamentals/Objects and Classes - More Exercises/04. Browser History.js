function browserHistory(obj, arr) {
  for (let line of arr) {
    let [command, name] = line.split(" ");

    if (command == "Open") {
      obj["Open Tabs"].push(name);
      obj["Browser Logs"].push(line);
    } else if (command == "Close") {
      if (obj["Open Tabs"].includes(name)) {
        let index = obj["Open Tabs"].indexOf(name);
        obj["Open Tabs"].splice(index, 1);
        obj["Browser Logs"].push(line);
        obj["Recently Closed"].push(name);
      }
    } else if (command == "Clear") {
      obj["Open Tabs"] = [];
      obj["Recently Closed"] = [];
      obj["Browser Logs"] = [];
    }
  }

  console.log(obj["Browser Name"]);
  console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${obj["Recently Closed"].join(", ")}`);
  console.log(`Browser Logs: ${obj["Browser Logs"].join(", ")}`);
}

// browserHistory(
//   {
//     "Browser Name": "Google Chrome",
//     "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": [
//       "Open YouTube",
//       "Open Yahoo",
//       "Open Google Translate",
//       "Close Yahoo",
//       "Open Gmail",
//       "Close Gmail",
//       "Open Facebook",
//     ],
//   },
//   ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );
browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
