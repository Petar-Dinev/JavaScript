function solve(input) {
  let result = {};

  let commands = {
    create,
    set,
    print,
  };

  for (let el of input) {
    let [command, param1, param2, param3] = el.split(" ");
    commands[command](param1, param2, param3);
  }

  function create(name, _, parrentName) {
    if (result[name] === undefined) {
      result[name] = {};
    }
    if (parrentName) {
      result[name].parents = [];
      result[name].parents.push(parrentName);
    }
  }

  function set(name, key, value) {
    result[name][key] = value;
  }

  function print(name) {
    let res = [];
    if (result[name].parents && result[name].parents.length > 0) {
      for (let parent of result[name].parents) {
        if (result[parent].parents && result[parent].parents.length > 0) {
          for (let parentt of result[parent].parents) {
            result[parent] = inheritian(result[parent], result[parentt]);
          }
        }
        result[name] = inheritian(result[name], result[parent]);
      }
    }
    for (let [key, value] of Object.entries(result[name])) {
      if (key !== "parents") {
        res.push(`${key}:${value}`);
      }
    }
    console.log(res.join(","));
  }

  function inheritian(name, parent) {
    return Object.assign(name, parent);
  }
}

solve([
  "create pesho",
  "create gosho inherit pesho",
  "create stamat inherit gosho",
  "set pesho rank number1",
  "set gosho nick goshko",
  "print stamat",
]);
