import { useMemo, useState } from 'react'
import { assets } from '../data/assets.js'
import AssetGrid from '../components/AssetGrid.jsx'
import FilterBar from '../components/FilterBar.jsx'

export default function Collection({ search, savedIds, onToggleSaved }) {
  const [category, setCategory] = useState('All')
  const filtered = useMemo(() => assets.filter((asset) => (category === 'All' || asset.category === category) && asset.title.toLowerCase().includes(search.toLowerCase())), [category, search])
  return <><div className="section-title"><span /><FilterBar value={category} onChange={setCategory} /></div><AssetGrid assets={filtered} savedIds={savedIds} onToggleSaved={onToggleSaved} /></>
}