import { AbstractControl } from '@angular/forms';

export const requireMatch = (control: AbstractControl) => {
  const selection: any = control.value;
  if (typeof selection === 'string' && selection.trim().length > 0) {
    return { incorrect: true };
  }
  return null;
};