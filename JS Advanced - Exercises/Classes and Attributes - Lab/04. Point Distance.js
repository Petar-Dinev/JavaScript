class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));