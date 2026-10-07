import { Heart } from 'lucide-react'
import Button from './Button.jsx'

export default function AssetCard({ asset, saved, onToggleSaved }) {
  return (
    <article className="asset-card">
      <img className="asset-image" src={asset.image} alt={`${asset.title} digital artwork`} loading="lazy" />
      <div className="asset-title-row">
        <h3 className="asset-title">{asset.title}</h3>
        <button type="button" className={`heart-button ${saved ? 'is-saved' : ''}`} onClick={() => onToggleSaved?.(asset.id)} aria-label={saved ? 'Remove from saved' : 'Save item'}>
          <Heart size={17} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="asset-meta"><span>Auction time</span><span>Current Bid</span></div>
      <div className="asset-meta asset-price"><span className="asset-time">{asset.time}</span><span><strong>{asset.currentBid}</strong><span>{asset.nextBid}</span></span></div>
      <Button onClick={() => window.alert(`Bid placed for ${asset.title}`)}>Place a Bid</Button>
    </article>
  )
}