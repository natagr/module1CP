import { Injectable } from '@angular/core';
import { Circle } from '../classes/circle';
import { Ellipse } from '../classes/ellipse';
import { Ring } from '../classes/ring';
import { ShapeCount } from '../interfaces/ShapeCount';

@Injectable({
  providedIn: 'root'
})
export class ShapesService {
    private shapes: Array<Circle | Ellipse | Ring> = [];

    addShape(shape: Circle | Ellipse | Ring) {
      this.shapes.push(shape);
    }
  
    removeShape(index: number) {
      this.shapes.splice(index, 1);
    }
  
    getTotalArea(): number {
      return this.shapes.reduce((totalArea, shape) => totalArea + shape.calculateArea(), 0);
    }
  
    getShapes(): Array<Circle | Ellipse | Ring> {
      return this.shapes;
    }

    getShapeCounts(): ShapeCount {
      return this.shapes.reduce((acc, shape) => {
        if (shape instanceof Circle && !(shape instanceof Ring)) {
          acc.circles += 1;
        } else if (shape instanceof Ellipse) {
          acc.ellipses += 1;
        } else if (shape instanceof Ring) {
          acc.rings += 1;
        }
        return acc;
      }, { circles: 0, rings: 0, ellipses: 0 });
    }
}
