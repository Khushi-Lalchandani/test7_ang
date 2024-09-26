export interface dynamicJson {
  type: 'text' | 'number' | 'slider' | 'checkbox' | 'dropdown' | 'textarea';
  label: string;
  isVisible: boolean;
  isRequired: boolean;
  errorMessage?: string;
  hint?: string;
  value?: string;
  options?: string[];
}
[];
