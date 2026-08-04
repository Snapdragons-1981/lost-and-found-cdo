import { z } from 'zod';

export const reportSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(100, 'Title must be less than 100 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters').max(2000, 'Description must be less than 2000 characters'),
  category: z.string().min(1, 'Please select a category'),
  color: z.string().optional(),
  brand: z.string().optional(),
  uniqueMarks: z.string().optional(),
  serialNumber: z.string().optional(),
  condition: z.string().optional(),
  estimatedValue: z.number().optional(),
  locationName: z.string().optional(),
  barangay: z.string().optional(),
  streetAddress: z.string().optional(),
  landmark: z.string().optional(),
  dateLost: z.string().optional(),
  dateFound: z.string().optional(),
  timeDescription: z.string().optional(),
  contactPhone: z.string().optional(),
  contactMessenger: z.string().optional(),
  contactEmail: z.string().email('Invalid email address').optional(),
  keptBy: z.string().optional(),
  keptByDetails: z.string().optional(),
  isEmergency: z.boolean().default(false),
  emergencyType: z.string().optional(),
});

export const searchSchema = z.object({
  query: z.string().optional(),
  type: z.enum(['LOST', 'FOUND']).optional(),
  category: z.string().optional(),
  barangay: z.string().optional(),
  color: z.string().optional(),
  brand: z.string().optional(),
  status: z.enum(['OPEN', 'MATCHED', 'RESOLVED', 'CLOSED', 'EXPIRED']).optional(),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  radius: z.number().optional(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(50).default(12),
});

export const messageSchema = z.object({
  content: z.string().min(1, 'Message cannot be empty').max(5000, 'Message must be less than 5000 characters'),
});

export const profileSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z.string().optional(),
  preferredLang: z.enum(['EN', 'CEB', 'FIL']).default('EN'),
});

export type ReportFormData = z.infer<typeof reportSchema>;
export type SearchFormData = z.infer<typeof searchSchema>;
export type MessageFormData = z.infer<typeof messageSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;
