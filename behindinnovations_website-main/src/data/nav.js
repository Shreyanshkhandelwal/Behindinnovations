// Full 14-page site map from the Master Plan (section 27) / website content draft.
// `primary` links show in the desktop bar; the rest sit under "More".
export const NAV_ITEMS = [
  { id: 'home', num: '01', label: 'Home', path: '/', primary: true },
  { id: 'about', num: '02', label: 'About BI', path: '/about', primary: true },
  { id: 'road', num: '03', label: 'Road', path: '/road', primary: true },
  { id: 'sea', num: '04', label: 'Sea', path: '/sea', primary: true },
  { id: 'air', num: '05', label: 'Air', path: '/air', primary: true },
  { id: 'space', num: '06', label: 'Space', path: '/space', primary: true },
  { id: 'tourism', num: '07', label: 'Tourism', path: '/tourism', primary: true },
  { id: 'logistics', num: '08', label: 'Logistics', path: '/logistics', primary: true },
  { id: 'technology', num: '09', label: 'Technology', path: '/technology' },
  { id: 'infrastructure', num: '10', label: 'Infrastructure', path: '/infrastructure' },
  { id: 'partners', num: '11', label: 'Partners', path: '/partners' },
  { id: 'investors', num: '12', label: 'Investors', path: '/investors' },
  { id: 'careers', num: '13', label: 'Careers', path: '/careers' },
  { id: 'contact', num: '14', label: 'Contact', path: '/contact' },
  // Not numbered as a content page; rendered as a standalone alert link, not under "More".
  { id: 'scam-alert', label: 'Scam Alert', path: '/scam-alert', alert: true },
]
