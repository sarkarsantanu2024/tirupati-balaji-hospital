import type { NavItem } from '@/types'

export const navigationData: NavItem[] = [
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Find A Doctor',
    href: '/find-a-doctor',
  },
  {
    label: 'Departments',
    href: '/departments',
    megaMenu: true,
    children: [
      { label: 'Cardiology', href: '/departments/cardiology', icon: 'cardiology' },
      { label: 'Neurology', href: '/departments/neurology', icon: 'neurology' },
      { label: 'Neurosurgery', href: '/departments/neurosurgery', icon: 'psychology' },
      { label: 'Orthopaedics', href: '/departments/orthopaedics', icon: 'orthopedics' },
      { label: 'Oncology', href: '/departments/oncology', icon: 'oncology' },
      { label: 'Gastroenterology', href: '/departments/gastroenterology', icon: 'gastroenterology' },
      { label: 'Gynecology & Obstetrics', href: '/departments/gynecology-obstetrics', icon: 'gynecology' },
      { label: 'Paediatrics', href: '/departments/paediatrics', icon: 'child_care' },
      { label: 'Urology', href: '/departments/urology', icon: 'urology' },
      { label: 'Nephrology', href: '/departments/nephrology', icon: 'nephrology' },
      { label: 'Ophthalmology', href: '/departments/ophthalmology', icon: 'ophthalmology' },
      { label: 'ENT', href: '/departments/ent', icon: 'ent' },
      { label: 'Dermatology', href: '/departments/dermatology', icon: 'dermatology' },
      { label: 'Endocrinology', href: '/departments/endocrinology', icon: 'endocrinology' },
      { label: 'General Surgery', href: '/departments/general-surgery', icon: 'medical_services' },
      { label: 'General Medicine', href: '/departments/general-medicine', icon: 'stethoscope' },
      { label: 'Anaesthesiology', href: '/departments/anaesthesiology', icon: 'vaccines' },
      { label: 'Physiotherapy', href: '/departments/physiotherapy', icon: 'physical_therapy' },
      { label: 'Psychiatry', href: '/departments/psychiatry', icon: 'sentiment_satisfied' },
      { label: 'Dental', href: '/departments/dental', icon: 'dentistry' },
      { label: 'Haematology', href: '/departments/haematology', icon: 'bloodtype' },
      { label: 'Plastic Surgery', href: '/departments/plastic-surgery', icon: 'healing' },
    ],
  },
  {
    label: 'Services',
    href: '/services/diagnostics',
    children: [
      {
        label: 'Diagnostic Services',
        href: '/services/diagnostics',
        description: 'MRI, CT Scan, X-Ray, Pathology & more',
      },
      {
        label: 'Health Packages',
        href: '/services/health-packages',
        description: 'Preventive health check-up packages',
      },
    ],
  },
  {
    label: 'Gallery',
    href: '/gallery',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const topBarLinks = [
  { label: 'Emergency: 0866-250-0108', href: 'tel:08662500108', icon: 'phone' },
  { label: 'OPD: 0866-250-0109', href: 'tel:08662500109', icon: 'phone' },
  { label: 'Diagnostics: 0866-250-0110', href: 'tel:08662500110', icon: 'phone' },
]
