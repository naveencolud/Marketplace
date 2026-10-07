import { Bell, Sun } from 'lucide-react'
import { avatarUrl } from '../data/assets.js'
import SearchBar from './SearchBar.jsx'

export default function Navbar({ search, onSearch }) {
  return (
    <header className="topbar">
      <SearchBar value={search} onChange={onSearch} />
      <div className="top-actions">
        <button className="icon-button" type="button" aria-label="Appearance"><Sun size={16} /></button>
        <button className="icon-button" type="button" aria-label="Notifications"><Bell size={16} /></button>
        <img className="avatar top-avatar" src={avatarUrl} alt="John Smith" />
      </div>
    </header>
  )
}