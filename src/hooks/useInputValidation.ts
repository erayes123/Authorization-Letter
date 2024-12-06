import { useCallback } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import type { AuthorizationFormData } from '../types/authorization';

export const useInputValidation = (
  setValue: UseFormSetValue<AuthorizationFormData>
) => {
  const handleInputChange = useCallback(
    (fieldName: keyof AuthorizationFormData) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        
        // Always prevent leading spaces for all inputs
        if (value.startsWith(' ')) {
          value = value.trimStart();
        }
        
        setValue(fieldName, value, { shouldValidate: true });
      },
    [setValue]
  );

  const handleIdNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      
      // Remove any spaces and non-digit characters
      value = value.replace(/\s+/g, '').replace(/[^\d]/g, '');
      
      // Check if the first digit is 1 or 2
      if (value.length > 0 && !['1', '2'].includes(value[0])) {
        return;
      }
      
      // Limit to 10 digits
      value = value.slice(0, 10);
      
      setValue('idNumber', value, { shouldValidate: true });
    },
    [setValue]
  );

  return { handleInputChange, handleIdNumberChange };
};