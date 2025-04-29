import { ReactNode } from 'react';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: ReactNode;
  date: string;
  imageUrl: string;
  author: string;
}