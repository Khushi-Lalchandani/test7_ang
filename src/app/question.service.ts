import { Injectable } from '@angular/core';
import { dynamicJson } from './dynamicJson.model';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  questions: dynamicJson[] = [
    {
      type: 'text',
      label: 'Name',
      isVisible: true,
      isRequired: true,
      errorMessage: 'Name is required',
      hint: 'Enter your full name',
    },
    {
      type: 'number',
      label: 'PhoneNumber',
      isVisible: true,
      isRequired: true,
      errorMessage: 'Must be a number',
      hint: 'Enter your phone number',
    },
    {
      type: 'slider',
      label: 'Age',
      isVisible: true,
      isRequired: true,
    },

    {
      type: 'dropdown',
      label: 'Gender',
      isVisible: true,
      isRequired: true,
      errorMessage: 'Please select your gender',
      value: 'Female',
      options: ['Male', 'Female', 'other'],
    },
    {
      type: 'textarea',
      label: 'Bio',
      isVisible: true,
      isRequired: false,
      hint: 'Tell about yourself',
    },
    {
      type: 'checkbox',
      label: 'Agree to T&C for continuing',
      isVisible: true,
      isRequired: true,
      errorMessage: 'Check in the box above',
    },
  ];
}
