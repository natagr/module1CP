import { FormControl } from '@angular/forms';
import { PositiveNumberValidatorService } from './positiveNumberValidator.service';
import { positiveNumberValidator } from './positiveNumberValidator';

describe('positiveNumberValidator', () => {
  let validatorService: PositiveNumberValidatorService;

  beforeEach(() => {
    validatorService = new PositiveNumberValidatorService();
  });

  it('should validate positive numbers correctly', () => {
    const control = new FormControl(10);
    const result = positiveNumberValidator()(control);
    expect(result).toBeNull();
  });

  it('should invalidate non-positive numbers', () => {
    const control = new FormControl(-1);
    const result = positiveNumberValidator()(control);
    expect(result).toEqual({ 'positiveNumberInvalid': true });
  });

  it('should invalidate zero as it is not a positive number', () => {
    const control = new FormControl(0);
    const result = positiveNumberValidator()(control);
    expect(result).toEqual({ 'positiveNumberInvalid': true });
  });

  it('should handle non-numeric values as invalid', () => {
    const control = new FormControl('abc');
    const result = positiveNumberValidator()(control);
    expect(result).toEqual({ 'positiveNumberInvalid': true });
  });
});