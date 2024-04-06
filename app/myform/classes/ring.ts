import { Circle } from "./circle";

export class Ring extends Circle {


    innerRadius: number;

    constructor(x: number, y: number, radius: number,  innerRadius: number) {
        super(x, y, radius);
        this.innerRadius=innerRadius;
    }

    override calculateArea(): number {
        return Math.PI * (this.radius * this.radius - this.innerRadius * this.innerRadius);
    }
}
