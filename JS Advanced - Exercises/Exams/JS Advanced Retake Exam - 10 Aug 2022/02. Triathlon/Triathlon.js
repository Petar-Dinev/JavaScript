class Triathlon {
  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }

  addParticipant(participantName, participantGender) {
    if (this.participants[participantName] != undefined) {
      return `${participantName} has already been added to the list`;
    } else {
      this.participants[participantName] = participantGender;
      return `A new participant has been added - ${participantName}`;
    }
  }

  completeness(participantName, condition) {
    if (this.participants[participantName] == undefined) {
      throw new Error(
        `${participantName} is not in the current participants list`
      );
    }
    if (condition < 30) {
      throw new Error(
        `${participantName} is not well prepared and cannot finish any discipline`
      );
    } else {
      const completedCount = Math.round(condition / 30);
      if (completedCount < 3) {
        return `${participantName} could only complete ${completedCount} of the disciplines`;
      } else {
        this.listOfFinalists.push({
          participantName,
          participantGender: this.participants[participantName],
        });
        return `Congratulations, ${participantName} finished the whole competition`;
      }
    }
  }
  rewarding(participantName) {
    if (
      !this.listOfFinalists.find((x) => x.participantName == participantName)
    ) {
      return `${participantName} is not in the current finalists list`;
    } else {
      return `${participantName} was rewarded with a trophy for his performance`;
    }
  }

  showRecord(criteria) {
    if (this.listOfFinalists.length == 0) {
      return `There are no finalists in this competition`;
    }
    if (criteria != "all") {
      let sortParticipants = this.listOfFinalists.filter(
        (x) => x.participantGender == criteria
      );
      if (sortParticipants.length == 0) {
        return `There are no ${criteria}'s that finished the competition`;
      }
      return `${sortParticipants[0].participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
    } else {
      let result = [`List of all ${this.competitionName} finalists:`];
      this.listOfFinalists
        .sort((a, b) => a.participantName.localeCompare(b.participantName))
        .forEach((element) => {
          result.push(`${element.participantName}`);
        });
        return result.join('\n')
    }
  }
}

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));

