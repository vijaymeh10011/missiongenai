import React from 'react';

export interface WaitlistFormData {
  name: string;
  email: string;
  linkedin: string;
  profession: string;
  reason: string;
  inviteCode?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum UserType {
  STUDENT = 'Student',
  PROFESSIONAL = 'Professional',
  COMPANY = 'Company',
  FOUNDER = 'Founder'
}