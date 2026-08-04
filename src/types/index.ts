// Lost & Found CDO - Type Definitions
// Using local types since Prisma client may not be generated yet

// ==============================
// User Types
// ==============================
export type UserRole = 'USER' | 'ADMIN' | 'MODERATOR' | 'BARANGAY';
export type Language = 'EN' | 'CEB' | 'FIL';

export interface User {
  id: string;
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  role: UserRole;
  isVerified: boolean;
  preferredLang: Language;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserWithStats extends User {
  _count: {
    reports: number;
    messages: number;
    bookmarks: number;
  };
  badges: {
    badge: {
      id: string;
      name: string;
      icon: string | null;
    };
    earnedAt: Date;
  }[];
}

// ==============================
// Report Types
// ==============================
export type ReportType = 'LOST' | 'FOUND';
export type ReportStatus = 'OPEN' | 'MATCHED' | 'RESOLVED' | 'CLOSED' | 'EXPIRED';
export type KeptBy = 'ME' | 'BARANGAY_HALL' | 'POLICE_STATION' | 'MALL_SECURITY' | 'SCHOOL' | 'OFFICE' | 'LOST_FOUND_DESK' | 'OTHER';
export type EmergencyType = 'CHILD' | 'SENIOR' | 'MEDICAL' | 'OTHER';

export interface Report {
  id: string;
  title: string;
  description: string;
  type: ReportType;
  status: ReportStatus;
  userId: string;
  category: string;
  color?: string;
  brand?: string;
  uniqueMarks?: string;
  serialNumber?: string;
  condition?: string;
  estimatedValue?: number;
  locationName?: string;
  barangay?: string;
  streetAddress?: string;
  landmark?: string;
  dateLost?: Date;
  dateFound?: Date;
  timeDescription?: string;
  keptBy?: KeptBy;
  keptByDetails?: string;
  isVerified: boolean;
  isEmergency: boolean;
  emergencyType?: EmergencyType;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
}

export interface ReportWithUser extends Report {
  user: Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar' | 'isVerified'>;
  images: Image[];
  _count?: {
    comments: number;
    bookmarks: number;
  };
}

export interface ReportFilters {
  type?: ReportType;
  status?: ReportStatus;
  category?: string;
  barangay?: string;
  color?: string;
  brand?: string;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
  latitude?: number;
  longitude?: number;
  radius?: number;
  page?: number;
  limit?: number;
}

// ==============================
// Image Types
// ==============================
export interface Image {
  id: string;
  reportId: string;
  url: string;
  publicId: string;
  alt?: string;
  sortOrder: number;
  createdAt: Date;
}

// ==============================
// Message Types
// ==============================
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  isRead: boolean;
  createdAt: Date;
}

export interface MessageWithUser extends Message {
  sender: Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>;
  receiver: Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>;
}

export interface Conversation {
  otherUser: Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar' | 'isVerified'>;
  lastMessage: Message;
  unreadCount: number;
}

// ==============================
// Notification Types
// ==============================
export type NotificationType = 
  | 'MATCH_FOUND' 
  | 'MESSAGE_RECEIVED' 
  | 'REPORT_APPROVED' 
  | 'REPORT_RESOLVED' 
  | 'BADGE_EARNED' 
  | 'SYSTEM';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  link?: string;
  isRead: boolean;
  createdAt: Date;
}

// ==============================
// Match Types
// ==============================
export type MatchStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED';

export interface Match {
  id: string;
  lostReportId: string;
  foundReportId: string;
  confidence: number;
  status: MatchStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface MatchWithReports extends Match {
  lostReport: ReportWithUser;
  foundReport: ReportWithUser;
}

// ==============================
// Location Types
// ==============================
export interface Barangay {
  id: string;
  name: string;
  latitude?: number;
  longitude?: number;
  isActive: boolean;
}

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  barangay?: string;
  city?: string;
  province?: string;
}

// ==============================
// Category Types
// ==============================
export interface Category {
  id: string;
  name: string;
  nameCeb?: string;
  nameFil?: string;
  slug: string;
  icon?: string;
  sortOrder: number;
  isActive: boolean;
}

// ==============================
// Comment Types
// ==============================
export interface Comment {
  id: string;
  reportId: string;
  userId: string;
  content: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CommentWithUser extends Comment {
  user: Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar' | 'isVerified'>;
}

// ==============================
// Bookmark Types
// ==============================
export interface Bookmark {
  id: string;
  userId: string;
  reportId: string;
  createdAt: Date;
}

// ==============================
// Audit Log Types
// ==============================
export interface AuditLog {
  id: string;
  userId?: string;
  action: string;
  entity: string;
  entityId?: string;
  details?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
}

// ==============================
// Badge Types
// ==============================
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon?: string;
  points: number;
}

// ==============================
// API Response Types
// ==============================
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ==============================
// Form Types
// ==============================
export interface LostReportFormData {
  title: string;
  description: string;
  category: string;
  color?: string;
  brand?: string;
  uniqueMarks?: string;
  serialNumber?: string;
  condition?: string;
  estimatedValue?: number;
  locationName?: string;
  barangay?: string;
  streetAddress?: string;
  landmark?: string;
  dateLost?: string;
  timeDescription?: string;
  contactPhone?: string;
  contactMessenger?: string;
  contactEmail?: string;
  images?: File[];
}

export interface FoundReportFormData extends LostReportFormData {
  dateFound?: string;
  keptBy?: string;
  keptByDetails?: string;
}

// ==============================
// Map Types
// ==============================
export interface MapMarker {
  id: string;
  type: ReportType;
  title: string;
  category: string;
  latitude: number;
  longitude: number;
  date: string;
  status: ReportStatus;
}

// ==============================
// Stats Types
// ==============================
export interface DashboardStats {
  totalReports: number;
  lostReports: number;
  foundReports: number;
  resolvedReports: number;
  matchRate: number;
  recentReports: ReportWithUser[];
  topBarangays: { name: string; count: number }[];
}

export interface AdminStats extends DashboardStats {
  totalUsers: number;
  activeUsers: number;
  reportsThisWeek: number;
  reportsThisMonth: number;
  avgResolutionTime: number;
}
