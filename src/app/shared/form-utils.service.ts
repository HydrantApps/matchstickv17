import { Injectable, signal } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export type PasswordValidation = {
  hasLowerCase: boolean;
  hasUpperCase: boolean;
  hasNumeric: boolean;
  hasSpecialCharacter?: boolean;
  hasMinimumCharacters?: boolean;
};

export const defaultValidation: PasswordValidation = {
  hasLowerCase: false,
  hasUpperCase: false,
  hasNumeric: false,
  hasSpecialCharacter: false,
  hasMinimumCharacters: false,
};

@Injectable({
  providedIn: 'root',
})
export class FormUtilsService {
  passwordValidationSignal = signal({ ...defaultValidation });

  testPasswordValue = (value: string) => {
    this.passwordValidationSignal.set({
      hasLowerCase: /[a-z]+/.test(value),
      hasUpperCase: /[A-Z]+/.test(value),
      hasNumeric: /[0-9]+/.test(value),
      hasSpecialCharacter: /\W|_/.test(value),
      hasMinimumCharacters: /^(?=.{8,})/.test(value),
    });
  };

  //const hasNumeric = /[0-9]+/.test(value);

  constructor() {}

  createPasswordStrengthValidator = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const hasLowerCase = /[a-z]+/.test(value);
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      const hasSpecialCharacter = /\W|_/.test(value);
      const userPasswordValid =
        hasUpperCase && hasLowerCase && hasNumeric && hasSpecialCharacter;
      return !userPasswordValid ? { passwordStrength: true } : null;
    };
  };
}
