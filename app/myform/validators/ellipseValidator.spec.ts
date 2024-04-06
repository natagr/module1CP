import { FormControl, FormGroup } from '@angular/forms';
import { ellipseValidator } from './ellipseValidator';

describe('ellipseValidator', () => {
  function createEllipseFormGroup(majorAxis: number | null, minorAxis: number | null): FormGroup {
    return new FormGroup({
      majorAxis: new FormControl(majorAxis),
      minorAxis: new FormControl(minorAxis)
    }, { validators: ellipseValidator() });
  }

  it('should not return an error if majorAxis is greater than minorAxis', () => {
    const formGroup = createEllipseFormGroup(5, 3);
    expect(formGroup.valid).toBeTrue();
    expect(formGroup.errors).toBeNull();
  });

  it('should return an error if majorAxis is less than minorAxis', () => {
    const formGroup = createEllipseFormGroup(2, 3);
    expect(formGroup.valid).toBeFalse();
    expect(formGroup.errors).toEqual({ 'ellipseInvalid': true });
  });

  it('should return an error if majorAxis is equal to minorAxis', () => {
    const formGroup = createEllipseFormGroup(3, 3);
    expect(formGroup.valid).toBeFalse();
    expect(formGroup.errors).toEqual({ 'ellipseInvalid': true });
  });

  it('should return an error if either majorAxis or minorAxis is null', () => {
    let formGroup = createEllipseFormGroup(null, 3);
    expect(formGroup.valid).toBeFalse();
    expect(formGroup.errors).toEqual({ 'ellipseInvalid': true });

    formGroup = createEllipseFormGroup(5, null);
    expect(formGroup.valid).toBeFalse();
    expect(formGroup.errors).toEqual({ 'ellipseInvalid': true });
  });

  it('should return an error if both majorAxis and minorAxis are null', () => {
    const formGroup = createEllipseFormGroup(null, null);
    expect(formGroup.valid).toBeFalse();
    expect(formGroup.errors).toEqual({ 'ellipseInvalid': true });
  });
});
