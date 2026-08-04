export const APP_NAME = 'Lost & Found CDO';
export const APP_DESCRIPTION = 'Helping Cagayan de Oro reunite people with what matters.';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const CATEGORIES = [
  { id: 'wallet', name: 'Wallet', icon: 'Wallet', color: '#8B5CF6' },
  { id: 'phone', name: 'Phone', icon: 'Smartphone', color: '#3B82F6' },
  { id: 'id', name: 'ID Card', icon: 'CreditCard', color: '#10B981' },
  { id: 'bag', name: 'Bag', icon: 'Briefcase', color: '#F59E0B' },
  { id: 'laptop', name: 'Laptop', icon: 'Laptop', color: '#6366F1' },
  { id: 'keys', name: 'Keys', icon: 'Key', color: '#EC4899' },
  { id: 'pet', name: 'Pet', icon: 'PawPrint', color: '#14B8A6' },
  { id: 'documents', name: 'Documents', icon: 'FileText', color: '#64748B' },
  { id: 'jewelry', name: 'Jewelry', icon: 'Gem', color: '#EAB308' },
  { id: 'vehicle', name: 'Vehicle', icon: 'Car', color: '#EF4444' },
  { id: 'others', name: 'Others', icon: 'Package', color: '#6B7280' },
] as const;

export const COLORS = [
  'Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 
  'Orange', 'Purple', 'Pink', 'Brown', 'Gray', 'Silver', 'Gold'
];

export const KEPT_BY_OPTIONS = [
  { value: 'ME', label: 'Kept by me' },
  { value: 'BARANGAY_HALL', label: 'Barangay Hall' },
  { value: 'POLICE_STATION', label: 'Police Station' },
  { value: 'MALL_SECURITY', label: 'Mall Security' },
  { value: 'SCHOOL', label: 'School' },
  { value: 'OFFICE', label: 'Office' },
  { value: 'LOST_FOUND_DESK', label: 'Lost & Found Desk' },
  { value: 'OTHER', label: 'Other' },
];

export const REPORT_STATUSES = [
  { value: 'OPEN', label: 'Open', color: 'bg-blue-100 text-blue-800' },
  { value: 'MATCHED', label: 'Matched', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'RESOLVED', label: 'Resolved', color: 'bg-green-100 text-green-800' },
  { value: 'CLOSED', label: 'Closed', color: 'bg-gray-100 text-gray-800' },
  { value: 'EXPIRED', label: 'Expired', color: 'bg-red-100 text-red-800' },
];

export const BARANGAYS_CDO = [
  'Agusan', 'Balubal', 'Balulang', 'Bayabas', 'Bayanga',
  'Besigan', 'Bugo', 'Bulua', 'Camaman-an', 'Canitoan',
  'Capitan Salamanca', 'Carmen', 'Consolacion', 'Cugman',
  'Dansolihon', 'F.S. Catanico', 'Gusa', 'Iponan', 'Lapasan',
  'Lumbia', 'Macabalan', 'Macsading', 'Mambuaya', 'Nazareth',
  'Pagalungan', 'Pagatpat', 'Puntod', 'Sabang', 'San Simon',
  'Tagoloan', 'Tignapoloan', 'Tuburan', 'Upper Balulang',
  'Upper Carmen', 'Upper Gusa', 'Upper Iponan', 'Upper Nazareth'
];

export const CEBUANO_TRANSLATIONS: Record<string, string> = {
  'I Lost Something': 'Nawalaan Ko Og Butang',
  'I Found Something': 'Nakita Ko Og Butang',
  'Search': 'Pangitaa',
  'Latest Reports': 'Pinakabag-ong mga Report',
  'Success Stories': 'Mga Kadaugan',
  'Statistics': 'Mga Estadistika',
  'Submit Report': 'Isumite ang Report',
  'Contact': 'Kontak',
  'Location': 'Lokasyon',
  'Description': 'Deskripsyon',
  'Photos': 'Mga Litrato',
  'Category': 'Kategorya',
  'Color': 'Kolor',
  'Brand': 'Brand',
  'Date': 'Adlaw',
  'Time': 'Oras',
  'Next': 'Sunod',
  'Back': 'Balik',
  'Cancel': 'Kanselahon',
  'Save': 'I-save',
  'Delete': 'Kuhaon',
  'Edit': 'I-edit',
  'View': 'Tan-awa',
  'Filter': 'Filter',
  'Sort': 'Sort',
  'Loading': 'Nag-load',
  'Error': 'Sayop',
  'Success': 'Kalampusan',
  'No results found': 'Walay resulta nga nakita',
  'Sign In': 'Sulod',
  'Sign Up': 'Pagrehistro',
  'Profile': 'Profil',
  'Settings': 'Mga Setting',
  'Logout': 'Gawas',
};

export const FILIPINO_TRANSLATIONS: Record<string, string> = {
  'I Lost Something': 'Nawalaan Ako Ng Bagay',
  'I Found Something': 'Nakita Ko Ng Bagay',
  'Search': 'Hanapin',
  'Latest Reports': 'Pinakabagong mga Report',
  'Success Stories': 'Mga Tagumpay',
  'Statistics': 'mga Estadistika',
  'Submit Report': 'Isumite ang Report',
  'Contact': 'Kontak',
  'Location': 'Lokasyon',
  'Description': 'Paglalarawan',
  'Photos': 'Mga Litrato',
  'Category': 'Kategorya',
  'Color': 'Kulay',
  'Brand': 'Brand',
  'Date': 'Petsa',
  'Time': 'Oras',
  'Next': 'Susunod',
  'Back': 'Bumalik',
  'Cancel': 'Kanselahin',
  'Save': 'I-save',
  'Delete': 'Tanggalin',
  'Edit': 'I-edit',
  'View': 'Tingnan',
  'Filter': 'Filter',
  'Sort': 'Sort',
  'Loading': 'Naglo-load',
  'Error': 'Error',
  'Success': 'Tagumpay',
  'No results found': 'Walang resulta na nahanap',
  'Sign In': 'Mag-sign In',
  'Sign Up': 'Mag-sign Up',
  'Profile': 'Profile',
  'Settings': 'Mga Setting',
  'Logout': 'Mag-logout',
};

export const ITEMS_PER_PAGE = 12;

export const MAP_DEFAULT_CENTER = {
  lat: 8.4542,
  lng: 124.6300,
};

export const MAP_DEFAULT_ZOOM = 12;
