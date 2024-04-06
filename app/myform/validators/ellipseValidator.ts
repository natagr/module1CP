import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ellipseValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const majorAxis = control.get('majorAxis')?.value;
      const minorAxis = control.get('minorAxis')?.value;
  
      return majorAxis && minorAxis && +majorAxis > +minorAxis ? null : { 'ellipseInvalid': true };
    };
  }
  