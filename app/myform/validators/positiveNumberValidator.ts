import { AbstractControl, ValidatorFn } from '@angular/forms';
import { PositiveNumberValidatorService } from './positiveNumberValidator.service';


export function positiveNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let validator = new PositiveNumberValidatorService();
    let valid = control.value > 0 && validator.validatePositiveNumber(control.value);
    return valid ? null : { 'positiveNumberInvalid': true };
  };
}