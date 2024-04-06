import { Component,  EventEmitter, OnInit, Output  } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ShapesService } from './services/shape.service'; 
import { Circle } from './classes/circle'; 
import { Ellipse } from './classes/ellipse';
import { Ring } from './classes/ring'; 
import { positiveNumberValidator } from './validators/positiveNumberValidator';
import { ringValidator } from './validators/ringValidator';
import { ellipseValidator } from './validators/ellipseValidator';


@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {

  @Output() formDataSubmitted: EventEmitter<any> = new EventEmitter<any>();
  shapeForm: FormGroup;

  isSubmitted = false; 
  constructor(private fb: FormBuilder, private shapesService: ShapesService) {
    this.shapeForm = this.fb.group({
      shapes: this.fb.array([])
    });
   }

  ngOnInit() {
    
  }


  get shapes() {
    return this.shapeForm.get('shapes') as FormArray;
  }

  addEllipse() {
   
    const ellipseGroup = this.fb.group({
      type: ['Ellipse'],
      centerX: ['', Validators.required],
      centerY: ['', Validators.required],
      majorAxis: ['', [ Validators.required, positiveNumberValidator()]],
      minorAxis: ['', [Validators.required, positiveNumberValidator()]]
    }, { validators: ellipseValidator() });
    
    this.shapes.push(ellipseGroup);
    
  
  }

  addRing() {
   
    const ringGroup = this.fb.group({
      type: ['Ring'],
      centerX: ['', Validators.required],
      centerY: ['', Validators.required],
      outerRadius: ['', [Validators.required, positiveNumberValidator()]],
      innerRadius: ['', [Validators.required, positiveNumberValidator()]]
    }, { validators: ringValidator() });
    this.shapes.push(ringGroup);
   
  }

  addCircle() {
    
    const circleGroup = this.fb.group({
      type: ['Circle'],
      centerX: ['', Validators.required],
      centerY: ['', Validators.required],
      radius: ['', [Validators.required, positiveNumberValidator()]]
    });
    this.shapes.push(circleGroup);
    
  }

  deleteShape(index: number) {
    this.shapes.removeAt(index);
    this.shapesService.removeShape(index);
    
  }

  onSubmit() {
  const shapes = this.shapeForm.value.shapes;

  shapes.forEach((shape: any) => {
    switch(shape.type) {
      case 'Ellipse':
        this.shapesService.addShape(new Ellipse(
          Number(shape.centerX), Number(shape.centerY), 
          Number(shape.majorAxis), Number(shape.minorAxis)
        ));
        break;
      case 'Ring':
        this.shapesService.addShape(new Ring(
          Number(shape.centerX), Number(shape.centerY), 
          Number(shape.outerRadius), Number(shape.innerRadius)
        ));
        break;
      case 'Circle':
        this.shapesService.addShape(new Circle(
          Number(shape.centerX), Number(shape.centerY), 
          Number(shape.radius)
        ));
        break;
      default:
        break;
    }
  });

  this.isSubmitted=true;
  this.formDataSubmitted.emit(this.shapeForm.value); 
  console.log(this.shapeForm.value);
}
}
