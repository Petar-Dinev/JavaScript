function constructionCrew(object) {
  let { weight, experience, levelOfHydrated, dizziness } = object;

  if (dizziness) {
    levelOfHydrated += weight * 0.1 * experience;
    dizziness = false;
  }

  let result = {
    weight,
    experience,
    levelOfHydrated,
    dizziness,
  };

  return result;
}

constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
