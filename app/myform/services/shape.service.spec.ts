import { TestBed } from '@angular/core/testing';
import { ShapesService } from './shape.service';
import { Circle } from '../classes/circle';
import { Ellipse } from '../classes/ellipse';
import { Ring } from '../classes/ring';

describe('ShapesService', () => {
  let service: ShapesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShapesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a shape', () => {
    const initialLength = service.getShapes().length;
    service.addShape(new Circle(0, 0, 5));
    expect(service.getShapes().length).toBe(initialLength + 1);
  });

  it('should remove a shape', () => {
    service.addShape(new Circle(0, 0, 5)); 
    const initialLength = service.getShapes().length;
    service.removeShape(0);
    expect(service.getShapes().length).toBe(initialLength - 1);
  });

  it('should calculate total area correctly', () => {

    service.addShape(new Circle(0, 0, 1)); 
    service.addShape(new Ellipse(0, 0, 2, 1)); 
    const expectedTotalArea = Math.PI + 2 * Math.PI;
    expect(service.getTotalArea()).toBeCloseTo(expectedTotalArea, 12);
  });

  it('should get all shapes', () => {
    service.addShape(new Circle(0, 0, 1));
    expect(service.getShapes().length).toBeGreaterThan(0);
  });

  it('should correctly count shapes by type', () => {
    service.addShape(new Circle(0, 0, 1));
    service.addShape(new Ring(0, 0, 3, 1));
    service.addShape(new Ellipse(0, 0, 4, 2));

    const counts = service.getShapeCounts();
    expect(counts.circles).toBe(1);
    expect(counts.rings).toBe(1);
    expect(counts.ellipses).toBe(1); 
  });

  afterEach(() => {
    service['shapes'] = [];
  });
});
