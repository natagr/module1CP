import { FormControl, FormGroup } from '@angular/forms';
import { ringValidator } from './ringValidator';

describe('ringValidator', () => {

  function createRingFormGroup(outerRadius: number | null, innerRadius: number | null): FormGroup {
    return new FormGroup({
      outerRadius: new FormControl(outerRadius),
      innerRadius: new FormControl(innerRadius)
    }, { validators: ringValidator() });
  }

  it('should not return an error if outerRadius is greater than innerRadius', () => {
    const formGroup = createRingFormGroup(10, 5);
    expect(formGroup.valid).toBeTrue();
    expect(formGroup.errors).toBeNull();
  });

  it('should return an error if outerRadius is less than innerRadius', () => {
    const formGroup = createRingFormGroup(4, 5);
    expect(formGroup.valid).toBeFalse();
    expect(formGroup.errors).toEqual({ 'ringInvalid': true });
  });

  it('should return an error if outerRadius is equal to innerRadius', () => {
    const formGroup = createRingFormGroup(5, 5);
    expect(formGroup.valid).toBeFalse();
    expect(formGroup.errors).toEqual({ 'ringInvalid': true });
  });

  it('should return an error if either outerRadius or innerRadius is null', () => {
    let formGroup = createRingFormGroup(null, 5);
    expect(formGroup.valid).toBeFalse();
    expect(formGroup.errors).toEqual({ 'ringInvalid': true });

    formGroup = createRingFormGroup(10, null);
    expect(formGroup.valid).toBeFalse();
    expect(formGroup.errors).toEqual({ 'ringInvalid': true });
  });

  it('should return an error if both outerRadius and innerRadius are null', () => {
    const formGroup = createRingFormGroup(null, null);
    expect(formGroup.valid).toBeFalse();
    expect(formGroup.errors).toEqual({ 'ringInvalid': true });
  });

  it('should handle string inputs that represent numbers', () => {
    const formGroup = createRingFormGroup(+10, +5);
    expect(formGroup.valid).toBeTrue();
    expect(formGroup.errors).toBeNull();
  });

});