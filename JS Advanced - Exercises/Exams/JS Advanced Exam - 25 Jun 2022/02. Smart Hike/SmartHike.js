class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals[peak] === undefined) {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    }
    return `${peak} has already been added to your goals`;
  }

  hike(peak, time, difficultyLevel) {
    if (this.goals[peak] === undefined) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.resources === 0) {
      throw new Error("You don't have enough resources to start the hike");
    }
    if (this.resources - time * 10 < 0) {
      return "You don't have enough resources to complete the hike";
    }
    this.resources -= time * 10;
    this.listOfHikes.push({ peak, time, difficultyLevel });
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    if (this.resources + time * 10 >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      this.resources += time * 10;
      return `You have rested for ${time} hours and gained ${
        time * 10
      }% resources`;
    }
  }

  showRecord(criteria) {
    if (this.listOfHikes.length == 0) {
      return `${this.username} has not done any hiking yet`;
    }
    if(criteria == 'all') {
        let result = ["All hiking records:"];
        this.listOfHikes.map(x => result.push(`${this.username} hiked ${x.peak} for ${x.time} hours`))
        return result.join('\n')
    }
    let bestHike = this.listOfHikes
      .filter((x) => x.difficultyLevel == criteria)
      .sort((a, b) => a.time - b.time)[0];
    if (bestHike) {
      return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
    } else {
        return `${this.username} has not done any ${criteria} hiking yet`;
    }
  }
}

const newHike = new SmartHike("Pesho");
console.log(newHike.addGoal("Musala", 2925));
