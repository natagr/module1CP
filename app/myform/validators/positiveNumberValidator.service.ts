
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositiveNumberValidatorService {
  validatePositiveNumber(value: number): boolean {
    return !isNaN(value) && value > 0;
  }
}
