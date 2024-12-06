import * as yup from 'yup';
import { validationMessages } from '../utils/validationMessages';

// Get current language from browser or your app's language setting
const currentLang = 'ar'; // This should be dynamic based on your app's language setting
const messages = validationMessages[currentLang];

export const schema = yup.object().shape({
  jobTitle: yup
    .string()
    .trim()
    .required(messages.required)
    .max(255, messages.maxLength),
    
  idNumber: yup
    .string()
    .trim()
    .required(messages.required)
    .matches(/^[12]\d{9}$/, messages.idFormat)
    .length(10, messages.exactLength),

  file: yup
    .mixed()
    .test('required', messages.required, (value) => value != null)
    .test('fileType', 'يجب أن يكون الملف بصيغة PDF', (value) => {
      if (!value) return false;
      return value.type === 'application/pdf';
    }),
});