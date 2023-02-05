function destinationMapper(destinations) {
  const pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;

  const destinationsArr = [];
  let match = pattern.exec(destinations);
  while (match != null) {
    destinationsArr.push(match[2]);
    match = pattern.exec(destinations);
  }
  let travelPoints = 0;
  destinationsArr.forEach((x) => (travelPoints += x.length));
  console.log(`Destinations: ${destinationsArr.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
