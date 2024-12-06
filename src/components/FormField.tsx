import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { AlertCircle } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import type { AuthorizationFormData } from '../types/authorization';

interface FormFieldProps {
  label: string;
  name: keyof AuthorizationFormData;
  register: UseFormRegister<AuthorizationFormData>;
  error?: FieldError;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  register,
  error,
  onChange,
  maxLength,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent space as the first character
    if (e.key === ' ' && (e.currentTarget.selectionStart === 0 || !e.currentTarget.value)) {
      e.preventDefault();
    }
  };

  const tooltipId = `error-tooltip-${name}`;

  return (
    <div className="space-y-1">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 text-right"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          id={name}
          {...register(name)}
          onChange={onChange || register(name).onChange}
          onKeyDown={handleKeyDown}
          maxLength={maxLength}
          className={`
            mt-1 block w-full h-[54px] px-4
            rounded-md border-2 outline-none
            transition-colors duration-200
            ${error
              ? 'border-red-500 focus:border-red-600 bg-red-50'
              : 'border-gray-300 hover:border-blue-400 focus:border-blue-500 bg-white'
            }
          `}
          dir="rtl"
        />
        {error && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <AlertCircle 
              className="w-5 h-5 text-red-500 cursor-help" 
              data-tooltip-id={tooltipId}
              data-tooltip-content={error.message}
            />
            <Tooltip 
              id={tooltipId}
              place="top"
              className="max-w-[300px] text-right !bg-gray-900 !px-4 !py-2"
              classNameArrow="!border-t-gray-900"
            />
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-600 text-sm mt-1 text-right">{error.message}</p>
      )}
    </div>
  );
};