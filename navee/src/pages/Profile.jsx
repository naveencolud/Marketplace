import { Check, LockKeyhole } from 'lucide-react'
import { assets, avatarUrl } from '../data/assets.js'
import AssetGrid from '../components/AssetGrid.jsx'

export default function Profile({ search, savedIds, onToggleSaved }) {
  return (
    <>
      <section className="creator-overview">
        <div className="profile-panel"><img className="avatar" src={avatarUrl} alt="John Smith" /><h3>Welcome, John Smith</h3><p>Looks like you are not verified yet. Verify yourself to use the full potential of XTrader.</p><div className="profile-option"><span className="stat-icon green"><Check size={14} /></span>Verify account</div><div className="profile-option"><span className="stat-icon"><LockKeyhole size={13} /></span>Two-factor Authentication (2FA)</div></div>
        <div className="following-area"><h2>Following</h2><div className="following-grid">{[1, 2, 3, 4].map((item) => <div className="creator-card" key={item}><img className="avatar" src={`https://i.pravatar.cc/100?img=${32 + item}`} alt="" /><div className="creator-copy"><strong>Papaya</strong><span>60 Items</span></div><button className="button red" onClick={(event) => { event.currentTarget.textContent = 'Follow'; event.currentTarget.classList.remove('red') }}>Unfollow</button></div>)}</div></div>
      </section>
      <h2 className="collection-title">My bought</h2><AssetGrid assets={assets.filter((asset) => asset.title.toLowerCase().includes(search.toLowerCase())).slice(0, 4)} savedIds={savedIds} onToggleSaved={onToggleSaved} />
      <h2 className="collection-title">My Collections</h2><AssetGrid assets={assets.slice(4, 8)} savedIds={savedIds} onToggleSaved={onToggleSaved} />
    </>
  )
}