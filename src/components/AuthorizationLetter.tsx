import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FileUploadForm } from './FileUploadForm';
import { schema } from '../schemas/authorizationSchema';
import { DownloadButton } from './DownloadButton';
import type { AuthorizationFormData } from '../types/authorization';

const AuthorizationLetter = () => {
  const form = useForm<AuthorizationFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: AuthorizationFormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">خطاب تفويض</h1>
            <p className="text-gray-600">قم بتحميل النموذج، توقيعه، ثم إعادة رفعه</p>
          </div>

          <div className="mb-8">
            <DownloadButton />
          </div>

          <FileUploadForm form={form} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AuthorizationLetter;