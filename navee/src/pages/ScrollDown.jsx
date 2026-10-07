import { ArrowUpRight, BadgeDollarSign, ChartNoAxesColumnIncreasing, WalletCards } from 'lucide-react'
import { activityItems, avatarUrl } from '../data/assets.js'
import Button from '../components/Button.jsx'

const creators = ['Papaya', 'Papaya', 'Papaya', 'Papaya', 'Papaya', 'Papaya', 'Papaya', 'Papaya']

function PriceChart() {
  return (
    <div className="chart-panel"><h3>ETH Price</h3><svg className="chart" viewBox="0 0 430 220" role="img" aria-label="ETH price trend chart">
      <g className="chart-grid">{[0, 1, 2, 3, 4, 5, 6].map((item) => <g key={item}><line x1="38" x2="420" y1={190 - item * 29} y2={190 - item * 29} /><text x="3" y={194 - item * 29}>{item * 50}</text></g>)}</g>
      <path className="chart-area" d="M38 190 L88 113 L145 123 L200 76 L257 88 L310 43 L365 102 L415 123 L440 94 L440 190 Z" />
      <polyline className="chart-line" points="38,190 88,113 145,123 200,76 257,88 310,43 365,102 415,123 440,94" />
      {[['38','190'],['88','113'],['145','123'],['200','76'],['257','88'],['310','43'],['365','102'],['415','123'],['440','94']].map(([cx, cy]) => <circle className="chart-dot" key={cx} cx={cx} cy={cy} r="5" />)}
    </svg></div>
  )
}

export default function ScrollDown({ compact = false, onNavigate }) {
  return (
    <section className="dashboard-lower">
      <div className="stats-layout">
        <div className="stats-stack">
          <div className="stat-card"><span className="stat-icon"><WalletCards size={17} /></span><div><strong>24K</strong><small>Artworks</small></div><span className="stat-change">+168.001%</span></div>
          <div className="stat-card"><span className="stat-icon red"><ChartNoAxesColumnIncreasing size={17} /></span><div><strong>89</strong><small>Auction</small></div><span className="stat-change">-168.001%</span></div>
          <div className="stat-card"><span className="stat-icon green"><BadgeDollarSign size={17} /></span><div><strong>82K</strong><small>Creators</small></div><span className="stat-change">+168.001%</span></div>
        </div>
        <PriceChart />
        <div className="donut-panel"><h3>Statistics</h3><div className="donut-wrap"><div className="donut" /></div><div className="donut-legend"><span><i className="legend-dot" />Artwork Sold</span><span><i className="legend-dot empty" />Artwork CanCel</span></div></div>
      </div>
      <div className="activity-layout">
        <section><div className="section-title"><h2>Recent Activity</h2><button className="text-link" onClick={() => onNavigate?.('activity')}>See more</button></div><div className="activity-list">{activityItems.map((item, index) => <div className="activity-row" key={`${item}-${index}`}><img className="avatar" src={avatarUrl} alt="" /><div className="activity-copy"><strong>Papaya</strong><span>{item}</span></div><time>12 mins ago</time></div>)}</div></section>
        <section><div className="section-title"><h2>Top Creators</h2>{compact && <button className="text-link" onClick={() => onNavigate?.('collections')}>View all</button>}</div><div className="creator-grid">{creators.map((creator, index) => <div className="creator-card" key={`${creator}-${index}`}><img className="avatar" src={`https://i.pravatar.cc/100?img=${32 + index}`} alt="" /><div className="creator-copy"><strong>{creator}</strong><span>60 Items</span></div><Button className="outline" onClick={(event) => { event.currentTarget.textContent = 'Following' }}>Follow</Button></div>)}</div></section>
      </div>
      {!compact && <Button className="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUpRight size={13} /> Back to top</Button>}
    </section>
  )
}