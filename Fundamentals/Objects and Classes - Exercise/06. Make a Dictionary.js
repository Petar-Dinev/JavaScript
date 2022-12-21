function makeADictionary(jsons) {
  let res = {};

  for (let json of jsons) {
    res = Object.assign(res, JSON.parse(json));
  }
  let result = [];

  for (let key in res) {
    result.push(key);
  }
  result.sort((a, b) => a.localeCompare(b));

  for (let key of result) {
    console.log(`Term: ${key} => Definition: ${res[key]}`);
  }
}

makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
