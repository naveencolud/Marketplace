import { useState } from 'react'
import { BadgeCheck, FileChartColumn, WalletCards } from 'lucide-react'
import { assets, creatorAvatar } from '../data/assets.js'

export default function Bids() {
  const [rows, setRows] = useState(assets.slice(0, 7))
  const removeRow = (id) => setRows((current) => current.filter((asset) => asset.id !== id))
  return (
    <>
      <div className="summary-grid">
        <div className="summary-card"><span className="stat-icon"><FileChartColumn size={18} /></span><div><strong>24K</strong><small>Artworks</small></div></div>
        <div className="summary-card"><span className="stat-icon green"><WalletCards size={18} /></span><div><strong>82K</strong><small>Auction</small></div></div>
        <div className="summary-card"><span className="stat-icon" style={{ background: '#f3d21a' }}><BadgeCheck size={18} /></span><div><strong>200</strong><small>Creators</small></div></div>
        <div className="summary-card"><span className="stat-icon red"><FileChartColumn size={18} /></span><div><strong>89</strong><small>Canceled</small></div></div>
      </div>
      <div className="bids-head"><h2>Active Bids</h2><button className="button" onClick={() => window.alert('Choose an artwork to place a bid.')}>Place a Bid</button></div>
      <div className="table-wrap"><table className="bid-table"><thead><tr><th><input type="checkbox" aria-label="Select all bids" /></th><th>Item List</th><th>Open Price</th><th>Your Offer</th><th>Recent Offer</th><th>Time Left</th><th>Action</th></tr></thead><tbody>{rows.map((asset) => <tr key={asset.id}><td><input type="checkbox" aria-label={`Select ${asset.title}`} /></td><td><div className="bid-item"><img src={asset.image} alt="" /><div><strong>{asset.title}</strong><span>John Abraham</span></div></div></td><td>0.0025 ETH</td><td>0.0025 ETH</td><td><div className="seller-cell"><img className="avatar" src={creatorAvatar} alt="" />0.0025 ETH</div></td><td>2 Hours 1 min 30s</td><td><button className="remove-bid" onClick={() => removeRow(asset.id)} aria-label={`Remove ${asset.title}`}>×</button></td></tr>)}</tbody></table></div>
    </>
  )
}