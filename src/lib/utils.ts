import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const FACILITIES = [
  {
    id: '01',
    icon: 'Barbell',
    name: 'Gym & Weightlifting',
    desc: 'Peralatan weightlifting & cardio berstandar internasional — semua impor, semua premium.',
    tag: 'Premium Equipment',
  },
  {
    id: '02',
    icon: 'Thermometer',
    name: 'Sauna Premium',
    desc: 'Fasilitas sauna eksklusif, gratis untuk semua member aktif. Relaksasi total setelah sesi keras.',
    tag: 'Free for Members',
  },
  {
    id: '03',
    icon: 'Users',
    name: '2 Studio Kelas',
    desc: 'Dua studio luas untuk berbagai kelas — dari Aerial Yoga hingga Kickboxing dan Zumba.',
    tag: 'Group Classes',
  },
  {
    id: '04',
    icon: 'Certificate',
    name: 'Personal Training',
    desc: 'Sesi private 1-on-1 dengan trainer bersertifikat. Program custom sesuai tujuan dan kondisi kamu.',
    tag: 'Private Sessions',
  },
  {
    id: '05',
    icon: 'Coffee',
    name: 'Nutrition Consulting',
    desc: 'Konsultasi nutrisi dengan ahli gizi untuk mendukung goal fitness kamu secara menyeluruh.',
    tag: 'Expert Guidance',
  },
  {
    id: '06',
    icon: 'Lock',
    name: 'Loker & Shower',
    desc: 'Loker aman berteknologi digital dan kamar mandi bersih tersedia setiap saat.',
    tag: 'Clean & Secure',
  },
]

export const PROGRAMS = [
  {
    id: '01',
    name: 'Aerobics',
    desc: 'Kelas kardio berirama tinggi yang menyenangkan. Bakar kalori maksimal dalam suasana penuh energi.',
    level: 'All Levels',
    category: 'cardio',
    duration: '60 min',
    icon: '◎',
  },
  {
    id: '02',
    name: 'Kickboxing',
    desc: 'Kombinasi teknik bela diri dan kardio intens. Tingkatkan kekuatan, refleks, dan kepercayaan diri.',
    level: 'Beginner–Advanced',
    category: 'combat',
    duration: '60 min',
    icon: '◉',
  },
  {
    id: '03',
    name: 'Nutrition Consulting',
    desc: 'Sesi konsultasi 1-on-1 dengan ahli gizi bersertifikat. Rancang pola makan sesuai target fitness-mu.',
    level: 'Personal',
    category: 'wellness',
    duration: '45 min',
    icon: '◈',
  },
  {
    id: '04',
    name: 'Personal Training',
    desc: 'Program latihan privat yang dirancang khusus oleh trainer bersertifikat sesuai kondisi dan tujuanmu.',
    level: 'Custom',
    category: 'strength',
    duration: '60–90 min',
    icon: '◇',
  },
  {
    id: '05',
    name: 'Private Lessons',
    desc: 'Sesi privat eksklusif untuk kelas apapun. Belajar lebih cepat dengan perhatian penuh dari instruktur.',
    level: 'All Levels',
    category: 'private',
    duration: 'Flexible',
    icon: '◆',
  },
  {
    id: '06',
    name: 'Youth Classes',
    desc: 'Kelas kebugaran khusus remaja. Program fun dan terstruktur untuk membentuk kebiasaan hidup sehat sejak dini.',
    level: 'Ages 10–17',
    category: 'youth',
    duration: '45 min',
    icon: '○',
  },
  {
    id: '07',
    name: 'Zumba',
    desc: 'Dance fitness party! Gerakan Latin dan global yang seru, efektif membakar kalori tanpa terasa seperti olahraga.',
    level: 'All Levels',
    category: 'dance',
    duration: '60 min',
    icon: '◐',
  },
  {
    id: '08',
    name: 'Gym Weightlifting',
    desc: 'Akses penuh ke area weightlifting dengan alat impor premium. Free weights, mesin, dan racks lengkap.',
    level: 'All Levels',
    category: 'strength',
    duration: 'Open',
    icon: '▣',
  },
  {
    id: '09',
    name: 'Yoga',
    desc: 'Temukan keseimbangan antara kekuatan, fleksibilitas, dan ketenangan jiwa dalam kelas yoga kami.',
    level: 'Beginner–Intermediate',
    category: 'mindful',
    duration: '75 min',
    icon: '◯',
  },
  {
    id: '10',
    name: 'Aerial Yoga',
    desc: 'Yoga di udara menggunakan hammock kain. Dekompresi tulang belakang, tingkatkan fleksibilitas & keseimbangan.',
    level: 'Beginner–Intermediate',
    category: 'mindful',
    duration: '75 min',
    icon: '◌',
  },
  {
    id: '11',
    name: 'Sauna',
    desc: 'Sesi sauna relaksasi untuk pemulihan otot, detoksifikasi, dan peremajaan. Gratis untuk member aktif.',
    level: 'All Members',
    category: 'recovery',
    duration: '15–30 min',
    icon: '◻',
  },
]

export const PROGRAM_CATEGORIES = [
  { key: 'all', label: 'Semua' },
  { key: 'cardio', label: 'Cardio' },
  { key: 'strength', label: 'Strength' },
  { key: 'combat', label: 'Combat' },
  { key: 'dance', label: 'Dance' },
  { key: 'mindful', label: 'Mind & Body' },
  { key: 'wellness', label: 'Wellness' },
  { key: 'recovery', label: 'Recovery' },
  { key: 'youth', label: 'Youth' },
  { key: 'private', label: 'Private' },
]

export const MEMBERSHIPS = [
  {
    period: 'Harian',
    price: 'Rp 40K',
    unit: 'per kunjungan · gym only',
    featured: false,
    features: ['Akses semua alat', 'Loker tersedia', 'Shower room'],
  },
  {
    period: 'Harian + Sauna',
    price: 'Rp 50K',
    unit: 'per kunjungan · gym + sauna',
    featured: false,
    features: ['Akses semua alat', 'Sauna session', 'Loker & shower'],
  },
  {
    period: 'Bulanan',
    price: 'Rp 250K',
    unit: 'per bulan · unlimited',
    featured: true,
    badge: 'Terpopuler',
    features: ['Akses tak terbatas', 'Sauna gratis', '2 studio kelas', 'Konsultasi trainer', 'Prioritas kelas'],
  },
  {
    period: '3 / 6 Bulan',
    price: 'Hemat',
    unit: 'diskon s/d 10%',
    featured: false,
    features: ['Semua benefit bulanan', 'Harga terbaik', 'Prioritas booking kelas', 'Free assessment'],
  },
]

export const REVIEWS = [
  {
    name: 'Zippy Art',
    role: '2 reviews · 3 photos',
    time: '8 bulan lalu',
    text: 'Really nice gym place. Reasonable price to become a member and the facility is great. There\'s free sauna for gym member — also a nice little cafe to chill after workout!',
    rating: 5,
  },
  {
    name: 'Qonitah Effendi',
    role: 'Local Guide · 11 reviews',
    time: '9 bulan lalu',
    text: 'Well worth the price! You get the new import machines, cozy ambience, and professional crew around. Sangat puas dengan fasilitas dan pelayanannya.',
    rating: 5,
  },
  {
    name: 'Cahya Sukma Riyandi',
    role: 'Local Guide · 286 reviews',
    time: '4 bulan lalu',
    text: 'The best fitness gym in the area. Have a lot of programs, new tools, sauna room, clean bathroom & toilets, amazing services from all the staff. Recommended!',
    rating: 5,
  },
]

export const STATS = [
  { num: '4.7', label: 'Google Rating', suffix: '⭐' },
  { num: '39+', label: 'Reviews Positif', suffix: '' },
  { num: '2', label: 'Studio Kelas', suffix: '' },
  { num: '100+', label: 'Alat Impor', suffix: '' },
]

export const SCHEDULES = [
  { day: 'Senin', classes: [
    { time: '07:00', name: 'Aerobics', trainer: 'Coach Rina', duration: '60 min', intensity: 'Med' },
    { time: '09:00', name: 'Yoga', trainer: 'Coach Sari', duration: '75 min', intensity: 'Low' },
    { time: '16:00', name: 'Kickboxing', trainer: 'Coach Andi', duration: '60 min', intensity: 'High' },
    { time: '18:00', name: 'Zumba', trainer: 'Coach Rina', duration: '60 min', intensity: 'Med' },
    { time: '19:30', name: 'Gym Weightlifting', trainer: 'Coach Budi', duration: '90 min', intensity: 'High' },
  ]},
  { day: 'Selasa', classes: [
    { time: '07:00', name: 'Aerial Yoga', trainer: 'Coach Sari', duration: '75 min', intensity: 'Low' },
    { time: '09:00', name: 'Youth Classes', trainer: 'Coach Rina', duration: '45 min', intensity: 'Med' },
    { time: '10:00', name: 'Nutrition Consulting', trainer: 'Ahli Gizi', duration: '45 min', intensity: 'Low' },
    { time: '16:00', name: 'Aerobics', trainer: 'Coach Rina', duration: '60 min', intensity: 'Med' },
    { time: '19:00', name: 'Personal Training', trainer: 'Coach Budi', duration: '60 min', intensity: 'High' },
  ]},
  { day: 'Rabu', classes: [
    { time: '07:00', name: 'Yoga', trainer: 'Coach Sari', duration: '75 min', intensity: 'Low' },
    { time: '09:00', name: 'Kickboxing', trainer: 'Coach Andi', duration: '60 min', intensity: 'High' },
    { time: '16:00', name: 'Zumba', trainer: 'Coach Rina', duration: '60 min', intensity: 'Med' },
    { time: '18:00', name: 'Aerial Yoga', trainer: 'Coach Sari', duration: '75 min', intensity: 'Low' },
    { time: '19:30', name: 'Gym Weightlifting', trainer: 'Coach Budi', duration: '90 min', intensity: 'High' },
  ]},
  { day: 'Kamis', classes: [
    { time: '07:00', name: 'Aerobics', trainer: 'Coach Rina', duration: '60 min', intensity: 'Med' },
    { time: '09:00', name: 'Youth Classes', trainer: 'Coach Rina', duration: '45 min', intensity: 'Med' },
    { time: '10:00', name: 'Nutrition Consulting', trainer: 'Ahli Gizi', duration: '45 min', intensity: 'Low' },
    { time: '16:00', name: 'Kickboxing', trainer: 'Coach Andi', duration: '60 min', intensity: 'High' },
    { time: '18:30', name: 'Yoga', trainer: 'Coach Sari', duration: '75 min', intensity: 'Low' },
  ]},
  { day: "Jum'at", classes: [
    { time: '07:00', name: 'Aerial Yoga', trainer: 'Coach Sari', duration: '75 min', intensity: 'Low' },
    { time: '09:00', name: 'Aerobics', trainer: 'Coach Rina', duration: '60 min', intensity: 'Med' },
    { time: '16:00', name: 'Zumba', trainer: 'Coach Rina', duration: '60 min', intensity: 'Med' },
    { time: '18:00', name: 'Kickboxing', trainer: 'Coach Andi', duration: '60 min', intensity: 'High' },
    { time: '19:30', name: 'Personal Training', trainer: 'Coach Budi', duration: '60 min', intensity: 'High' },
  ]},
  { day: 'Sabtu', classes: [
    { time: '07:00', name: 'Yoga', trainer: 'Coach Sari', duration: '90 min', intensity: 'Low' },
    { time: '09:00', name: 'Aerobics', trainer: 'Coach Rina', duration: '60 min', intensity: 'Med' },
    { time: '10:30', name: 'Youth Classes', trainer: 'Coach Rina', duration: '45 min', intensity: 'Med' },
    { time: '14:00', name: 'Zumba', trainer: 'Coach Rina', duration: '60 min', intensity: 'Med' },
    { time: '16:00', name: 'Kickboxing', trainer: 'Coach Andi', duration: '60 min', intensity: 'High' },
  ]},
  { day: 'Minggu', classes: [
    { time: '08:00', name: 'Aerial Yoga', trainer: 'Coach Sari', duration: '90 min', intensity: 'Low' },
    { time: '10:00', name: 'Gym Weightlifting', trainer: 'Coach Budi', duration: '90 min', intensity: 'High' },
    { time: '14:00', name: 'Zumba', trainer: 'Coach Rina', duration: '60 min', intensity: 'Med' },
    { time: '16:00', name: 'Yoga', trainer: 'Coach Sari', duration: '75 min', intensity: 'Low' },
    { time: '18:00', name: 'Aerobics', trainer: 'Coach Rina', duration: '60 min', intensity: 'Med' },
  ]},
]
