import AssetCard from './AssetCard.jsx'

export default function AssetGrid({ assets, savedIds = [], onToggleSaved }) {
  if (!assets.length) return <div className="empty-state">No items match your search.</div>
  return <div className="asset-grid">{assets.map((asset) => <AssetCard key={asset.id} asset={asset} saved={savedIds.includes(asset.id)} onToggleSaved={onToggleSaved} />)}</div>
}