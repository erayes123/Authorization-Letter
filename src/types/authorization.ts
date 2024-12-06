export interface AuthorizationFormData {
  file: File | null;
  jobTitle: string;
  idNumber: string;
}

export interface ValidationMessages {
  ar: {
    required: string;
    maxLength: string;
    minLength: string;
    exactLength: string;
    number: string;
    idFormat: string;
  };
  en: {
    required: string;
    maxLength: string;
    minLength: string;
    exactLength: string;
    number: string;
    idFormat: string;
  };
}