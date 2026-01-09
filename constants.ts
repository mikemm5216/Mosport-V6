import { UserRole, Venue, SportEvent, QoETagType } from './types';

export const APP_NAME = "MOSPORT";
export const APP_VERSION = "V6.1";

// Hanoi Ecosystem Simulation
export const MOCK_VENUES: Venue[] = [
  {
    id: 'v1',
    name: 'Puku Cafe & Bar',
    location: 'Hoan Kiem',
    distance: '0.5 km',
    rating: 4.5,
    imageUrl: 'https://picsum.photos/200/200?random=1',
    lastVerified: new Date(),
    tags: [
      { id: 't1', type: QoETagType.BROADCAST, label: 'Big Screen', confidence: 0.98 },
      { id: 't2', type: QoETagType.VIBE, label: 'Sound ON', confidence: 0.95 }
    ]
  },
  {
    id: 'v2',
    name: 'The Republic',
    location: 'Tay Ho',
    distance: '3.2 km',
    rating: 4.6,
    imageUrl: 'https://picsum.photos/200/200?random=2',
    lastVerified: new Date(),
    tags: [
      { id: 't3', type: QoETagType.BROADCAST, label: 'Multi-Screen', confidence: 0.92 },
      { id: 't4', type: QoETagType.VIBE, label: 'Rowdy', confidence: 0.85 }
    ]
  },
  {
    id: 'v3',
    name: 'SportivO',
    location: 'Hoan Kiem',
    distance: '0.8 km',
    rating: 4.4,
    imageUrl: 'https://picsum.photos/200/200?random=3',
    lastVerified: new Date(Date.now() - 86400000), // 1 day ago
    tags: [
      { id: 't5', type: QoETagType.SURVIVAL, label: 'Open Late', confidence: 0.99 }
    ]
  },
  {
    id: 'v4',
    name: 'BOOM Bar',
    location: 'Hoan Kiem',
    distance: '1.1 km',
    rating: 4.2,
    imageUrl: 'https://picsum.photos/200/200?random=4',
    lastVerified: new Date(Date.now() - 3600000), // 1 hour ago
    tags: []
  }
];

export const MOCK_EVENTS: SportEvent[] = [
  {
    id: 'e1',
    title: 'Vietnam vs Thailand',
    league: 'AFF Cup',
    startTime: new Date(new Date().setHours(19, 30, 0, 0)),
    teamA: 'Vietnam',
    teamB: 'Thailand',
    isHot: true
  },
  {
    id: 'e2',
    title: 'Hanoi FC vs CAHN',
    league: 'V.League 1',
    startTime: new Date(new Date().setHours(19, 15, 0, 0)),
    teamA: 'Hanoi FC',
    teamB: 'CAHN',
    isHot: true
  },
  {
    id: 'e3',
    title: 'Man City vs Real Madrid',
    league: 'Champions League',
    startTime: new Date(new Date().setHours(2, 0, 0, 0)), // Late night
    teamA: 'Man City',
    teamB: 'Real Madrid',
    isHot: true
  },
  {
    id: 'e4',
    title: 'Nam Dinh vs Hai Phong',
    league: 'V.League 1',
    startTime: new Date(new Date().setHours(18, 0, 0, 0)),
    teamA: 'Nam Dinh',
    teamB: 'Hai Phong',
    isHot: false
  },
  {
    id: 'e5',
    title: 'Man Utd vs Liverpool',
    league: 'Premier League',
    startTime: new Date(new Date().setHours(22, 30, 0, 0)),
    teamA: 'Man Utd',
    teamB: 'Liverpool',
    isHot: true
  }
];

export const ROLE_THEMES = {
  [UserRole.FAN]: {
    primary: 'text-mosport-fan',
    bg: 'bg-mosport-fan',
    border: 'border-mosport-fan',
    hover: 'hover:bg-blue-800'
  },
  [UserRole.VENUE]: {
    primary: 'text-mosport-venue',
    bg: 'bg-mosport-venue',
    border: 'border-mosport-venue',
    hover: 'hover:bg-pink-800'
  },
  [UserRole.STAFF]: {
    primary: 'text-mosport-staff',
    bg: 'bg-mosport-staff',
    border: 'border-white',
    hover: 'hover:bg-gray-200'
  }
};

export const VLEAGUE_TEAM_LINKS: Record<string, string> = {
  // V.League 1
  'Hanoi FC': 'https://www.facebook.com/officialhanoifc/?locale=vi_VN',
  'HNFC': 'https://www.facebook.com/officialhanoifc/?locale=vi_VN',
  
  'CAHN': 'https://www.facebook.com/CAHNFCVN/',
  'Cong An Ha Noi FC': 'https://www.facebook.com/CAHNFCVN/',
  
  'The Cong - Viettel': 'https://www.facebook.com/thecongviettelfc/?locale=vi_VN',
  'Viettel': 'https://www.facebook.com/thecongviettelfc/?locale=vi_VN',
  
  'Hai Phong': 'https://www.facebook.com/haiphongfootballclub',
  'Hai Phong FC': 'https://www.facebook.com/haiphongfootballclub',
  
  'Nam Dinh': 'https://www.facebook.com/ThepXanhNamDinhFC/',
  'Thep Xanh Nam Dinh': 'https://www.facebook.com/ThepXanhNamDinhFC/',
  
  'Dong A Thanh Hoa': 'https://www.facebook.com/DongAThanhHoaFootballClub',
  'Thanh Hoa': 'https://www.facebook.com/DongAThanhHoaFootballClub',
  
  'LPBank HAGL': 'https://www.facebook.com/haglfc.clb',
  'HAGL': 'https://www.facebook.com/haglfc.clb',
  
  'Song Lam Nghe An': 'https://www.facebook.com/SLNAFC',
  'SLNA': 'https://www.facebook.com/SLNAFC',
  
  'Becamex Binh Duong': 'https://www.facebook.com/becamextphochiminhfc',
  'Binh Duong': 'https://www.facebook.com/becamextphochiminhfc',
  
  'Ho Chi Minh City FC': 'https://www.facebook.com/hcmcfootballclub/?locale=vi_VN',
  'HCMC': 'https://www.facebook.com/hcmcfootballclub/?locale=vi_VN',
  'TP. HCM': 'https://www.facebook.com/hcmcfootballclub/?locale=vi_VN',
  
  'SHB Da Nang': 'https://www.facebook.com/shbdanang.official/',
  'Da Nang': 'https://www.facebook.com/shbdanang.official/',
  
  'PVF-CAND': 'https://www.facebook.com/PVFCAND',
  
  'Hong Linh Ha Tinh': 'https://www.facebook.com/HongLinhHaTinhOfficial/',
  'Ha Tinh': 'https://www.facebook.com/HongLinhHaTinhOfficial/',
  
  'Quang Nam FC': 'https://www.facebook.com/quangnamfc1997/?locale=vi_VN',
  'Quang Nam': 'https://www.facebook.com/quangnamfc1997/?locale=vi_VN',

  // V.League 2
  'Bac Ninh FC': 'https://www.facebook.com/bacninhfc.com.vn/',
  'Bac Ninh': 'https://www.facebook.com/bacninhfc.com.vn/',
  
  'Phu Dong Ninh Binh': 'https://www.facebook.com/CLBNinhBinh/',
  'Ninh Binh': 'https://www.facebook.com/CLBNinhBinh/',
  
  'Truong Tuoi Binh Phuoc': 'https://www.facebook.com/truongtuoidongnaifc',
  'Binh Phuoc': 'https://www.facebook.com/truongtuoidongnaifc',
  
  'Quy Nhon Binh Dinh': 'https://www.facebook.com/QuyNhonUnitedFC',
  'Binh Dinh': 'https://www.facebook.com/QuyNhonUnitedFC',
  
  'Khatoco Khanh Hoa': 'https://www.facebook.com/KhatocoKhanhHoaOfficial',
  'Khanh Hoa': 'https://www.facebook.com/KhatocoKhanhHoaOfficial',
  
  'Hoa Binh FC': 'https://www.facebook.com/hoabinhfootballclub?locale=vi_VN',
  'Hoa Binh': 'https://www.facebook.com/hoabinhfootballclub?locale=vi_VN',
  
  'Ba Ria Vung Tau': 'https://www.facebook.com/CLBbongdaBRVT/',
  
  'Long An FC': 'https://www.facebook.com/CaulacboBongdaLongAn',
  'Long An': 'https://www.facebook.com/CaulacboBongdaLongAn',
  
  'Hue FC': 'https://www.facebook.com/profile.php?id=100063572254020',
  'Hue': 'https://www.facebook.com/profile.php?id=100063572254020',
  
  'Dong Thap FC': 'https://www.facebook.com/clbdongthap/?locale=vi_VN',
  'Dong Thap': 'https://www.facebook.com/clbdongthap/?locale=vi_VN',
  
  'Dong Nai FC': 'https://www.facebook.com/caulacbobongdadongnai/?locale=vi_VN',
  'Dong Nai': 'https://www.facebook.com/caulacbobongdadongnai/?locale=vi_VN'
};