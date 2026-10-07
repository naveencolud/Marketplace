import { Box, Grid2X2, Heart, LogOut, Settings, Star, UserCircle, WalletCards } from 'lucide-react'

const links = [
  { id: 'home', label: 'Home', Icon: Grid2X2 },
  { id: 'bids', label: 'Bids', Icon: WalletCards },
  { id: 'saved', label: 'Saved', Icon: Heart },
  { id: 'collections', label: 'Collections', Icon: Star },
  { id: 'profile', label: 'Profile', Icon: UserCircle },
  { id: 'settings', label: 'Settings', Icon: Settings },
]

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand-mark" aria-label="Navee"><Box size={15} strokeWidth={2.5} /></div>
      <nav className="side-nav" aria-label="Main navigation">
        {links.map(({ id, label, Icon }) => (
          <button key={id} type="button" className={`side-link ${activePage === id ? 'active' : ''}`} onClick={() => onNavigate(id)} aria-label={label} title={label}>
            <Icon size={16} strokeWidth={1.8} />
          </button>
        ))}
      </nav>
      <button type="button" className="side-logout" aria-label="Sign out"><LogOut size={16} /></button>
    </aside>
  )
}