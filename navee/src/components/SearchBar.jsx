import { Search } from 'lucide-react'

export default function SearchBar({ value, onChange }) {
  return (
    <label className="search-wrap">
      <Search size={18} aria-hidden="true" />
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search Here" aria-label="Search items" />
    </label>
  )
}