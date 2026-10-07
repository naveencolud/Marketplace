import { useMemo } from 'react'
import { assets } from '../data/assets.js'
import AssetGrid from '../components/AssetGrid.jsx'

export default function Saved({ search, savedIds, onToggleSaved }) {
  const filtered = useMemo(() => assets.filter((asset) => savedIds.includes(asset.id) && asset.title.toLowerCase().includes(search.toLowerCase())), [search, savedIds])
  return <AssetGrid assets={filtered} savedIds={savedIds} onToggleSaved={onToggleSaved} />
}