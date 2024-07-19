class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        }

        this.tasks.push({ description, cost, priority });
        this.budget -= cost;
        return `The task '${description}' has been successfully added to the renovation plan.`
    };

    markTaskAsCompleted(description) {
        const task = this.tasks.find(t => t.description == description);

        if (!task) {
            throw new Error(`Task '${description}' not found in the renovation plan.`)
        }

        this.tasks.splice(this.tasks.indexOf(task), 1)
        this.completedTasks.push(task)

        return `The task '${description}' has been successfully completed.`
    }

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return "The priority cannot be zero or negative."
        }

        let tasksCount = 0

        for (let task of this.tasks) {
            if (task.priority >= minimalPriority) {
                tasksCount += 1;
            }
        }

        if (tasksCount) {
            return `You have ${tasksCount} tasks to prioritize.`
        }

        return `No tasks found with priority ${minimalPriority} or higher.`
    }

    renovationSummary() {
        if (this.completedTasks.length == 0) {
            throw new Error("No tasks have been completed yet!")
        }

        const result = [`Budget left $${this.budget}.`,
        `You have completed ${this.completedTasks.length} tasks.`,
            "Pending tasks in the renovation plan:"
        ];

        for (let task of this.tasks) {
            result.push(`${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`)
        }

        return result.join('\n')
    }
}

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());

