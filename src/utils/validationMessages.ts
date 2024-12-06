import type { ValidationMessages } from '../types/authorization';

export const validationMessages: ValidationMessages = {
  ar: {
    required: 'هذا الحقل مطلوب',
    maxLength: 'يجب ألا يتجاوز عدد الأحرف 255 حرفاً',
    minLength: 'يجب أن يتكون الرقم من 10 أرقام',
    exactLength: 'يجب أن يتكون الرقم من 10 أرقام بالضبط',
    number: 'يجب أن يحتوي على أرقام فقط',
    idFormat: 'يجب أن يبدأ الرقم بـ 1 أو 2 ويتكون من 10 أرقام'
  },
  en: {
    required: 'This field is required',
    maxLength: 'Maximum length is 255 characters',
    minLength: 'ID number must be 10 digits',
    exactLength: 'ID number must be exactly 10 digits',
    number: 'Must contain numbers only',
    idFormat: 'ID must start with 1 or 2 and be exactly 10 digits'
  }
};