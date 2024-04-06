import { Component, OnInit } from '@angular/core';
import { ShapesService } from '../myform/services/shape.service';  
import { ShapeCount } from '../myform/interfaces/ShapeCount';


@Component({
  selector: 'app-resultinterface',
  templateUrl: './resultinterface.component.html',
  styleUrls: ['./resultinterface.component.scss'],
})
export class ResultinterfaceComponent implements OnInit {
  constructor(private shapesService: ShapesService) { }

  getShapeCounts(): ShapeCount {
 
    return this.shapesService.getShapeCounts();
  }

 
  getTotalArea(): number {
    
    return this.shapesService.getTotalArea();
  }

  ngOnInit() {
    
  }
}
