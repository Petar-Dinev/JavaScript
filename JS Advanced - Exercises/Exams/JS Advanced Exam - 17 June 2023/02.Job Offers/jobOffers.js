class JobOffers {
  constructor(employer, position, jobCandidates) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = [];
  }

  jobApplication(candidates) {
    const addedCandidate = [];
    for (let line of candidates) {
      let [name, education, yearsExperience] = line.split("-");
      yearsExperience = Number(yearsExperience);
      const person = this.jobCandidates.find((x) => x.name == name);
      if (person) {
        if (yearsExperience > person.yearsExperience) {
          person.yearsExperience = yearsExperience;
        }
      } else {
        this.jobCandidates.push({ name, education, yearsExperience });
        if (!addedCandidate.includes(name)) {
          addedCandidate.push(name);
        }
      }
    }
    return `You successfully added candidates: ${addedCandidate.join(", ")}.`;
  }

  jobOffer(chosenPerson) {
    let [name, minimalExperience] = chosenPerson.split("-");
    minimalExperience = Number(minimalExperience);
    const person = this.jobCandidates.find((x) => x.name == name);

    if (!person) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (person.yearsExperience < minimalExperience) {
      throw new Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
      );
    }
    person.yearsExperience = "hired";
    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    const person = this.jobCandidates.find((x) => x.name == name);
    if (!person) {
      throw new Error(`${name} is not in the candidates list!`);
    }
    if (person.education == "Bachelor") {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
    } else if (person.education == "Master") {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
    } else {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }
  }

  candidatesDatabase() {
    if (this.jobCandidates.length == 0) {
      throw new Error("Candidate Database is empty!");
    }
    const result = ["Candidates list:"];
    this.jobCandidates
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((person) =>
        result.push(`${person.name}-${person.yearsExperience}`)
      );
    return result.join("\n");
  }
}
