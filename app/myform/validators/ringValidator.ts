import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function ringValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const outerRadius = control.get('outerRadius')?.value;
    const innerRadius = control.get('innerRadius')?.value;

    return outerRadius && innerRadius && +outerRadius > +innerRadius ? null : { 'ringInvalid': true };
  };
}
