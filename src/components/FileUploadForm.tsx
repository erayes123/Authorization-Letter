import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Upload, FileCheck, AlertCircle, Trash2 } from 'lucide-react';
import type { AuthorizationFormData } from '../types/authorization';
import { useInputValidation } from '../hooks/useInputValidation';
import { FormField } from './FormField';

interface FileUploadFormProps {
  form: UseFormReturn<AuthorizationFormData>;
  onSubmit: (data: AuthorizationFormData) => void;
}

export const FileUploadForm = ({ form, onSubmit }: FileUploadFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = form;

  const { handleInputChange, handleIdNumberChange } = useInputValidation(setValue);
  const file = watch('file');

  const handleDeleteFile = () => {
    setValue('file', null);
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormField
        label="المسمى الوظيفي"
        name="jobTitle"
        register={register}
        error={errors.jobTitle}
        onChange={handleInputChange('jobTitle')}
      />

      <FormField
        label="رقم الهوية"
        name="idNumber"
        register={register}
        error={errors.idNumber}
        onChange={handleIdNumberChange}
        maxLength={10}
      />

      {/* File Upload Section */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700 text-right">
          رفع خطاب التفويض الموقع
        </label>
        <div
          className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md transition-colors ${
            errors.file
              ? 'border-red-300'
              : 'border-gray-300 hover:border-blue-400'
          }`}
        >
          <div className="space-y-1 text-center">
            <Upload
              className={`mx-auto h-12 w-12 ${
                errors.file ? 'text-red-400' : 'text-gray-400'
              }`}
            />
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
              >
                <span>اختر ملف</span>
                <input
                  id="file-upload"
                  type="file"
                  className="sr-only"
                  accept=".pdf"
                  {...register('file', {
                    onChange: (e) => {
                      const file = e.target.files?.[0];
                      setValue('file', file || null);
                    },
                  })}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">PDF فقط</p>
          </div>
        </div>

        {errors.file && (
          <div className="flex items-center justify-center text-red-600 mt-2">
            <AlertCircle className="w-5 h-5 ml-2" />
            <span>{errors.file.message}</span>
          </div>
        )}

        {file && !errors.file && (
          <div className="mt-4">
            <div className="flex items-center justify-between bg-green-50 p-4 rounded-md">
              <div className="flex items-center text-green-600">
                <FileCheck className="w-5 h-5 ml-2" />
                <span>تم رفع الملف بنجاح: {file.name}</span>
              </div>
              <button
                type="button"
                onClick={handleDeleteFile}
                className="flex items-center text-red-600 hover:text-red-700 focus:outline-none"
                title="حذف الملف"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full mt-6 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        إرسال
      </button>
    </form>
  );
};