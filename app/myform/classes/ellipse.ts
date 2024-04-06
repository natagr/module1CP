import { Point } from "./point";

export class Ellipse extends Point {

    majorAxis: number;
    minorAxis: number;

    constructor(x: number, y: number,  majorAxis: number,  minorAxis: number) {
        super(x, y);
        this.majorAxis = majorAxis;
        this.minorAxis = minorAxis;
    }

    calculateArea(): number {
        return Math.PI * this.majorAxis * this.minorAxis;
    }

    setCenter(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }
}
