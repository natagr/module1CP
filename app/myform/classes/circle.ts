import { Point } from "./point";

export class Circle extends Point {
   
       radius: number;

    constructor(x: number, y: number,  radius: number) {
        super(x, y);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    setCenter(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }
}
