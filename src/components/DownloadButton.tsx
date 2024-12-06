import React from 'react';
import { Download } from 'lucide-react';

export const DownloadButton = () => {
  const handleDownload = () => {
    const templateUrl = '/authorization-letter-template.pdf';
    const link = document.createElement('a');
    link.href = templateUrl;
    link.download = 'خطاب-تفويض.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <Download className="w-5 h-5 ml-2" />
      تحميل نموذج خطاب التفويض
    </button>
  );
};