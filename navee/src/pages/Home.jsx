import { useMemo, useState } from 'react'
import { assets } from '../data/assets.js'
import AssetGrid from '../components/AssetGrid.jsx'
import Button from '../components/Button.jsx'
import FilterBar from '../components/FilterBar.jsx'
import ScrollDown from './ScrollDown.jsx'

const featureImage = '/image/NFT.png'
const artistImage = 'https://i.pravatar.cc/100?img=32'

export default function Home({ search, savedIds, onToggleSaved, onNavigate }) {
  const [category, setCategory] = useState('All')
  const visibleAssets = useMemo(() => assets.filter((asset) => (category === 'All' || asset.category === category) && asset.title.toLowerCase().includes(search.toLowerCase())), [category, search])
  return (
    <>
      <section className="hero-row">
        <div className="hero-banner">
          <img className="hero-artwork" src="/image/Discover.png" alt="Discover, collect, sell and create your NFT" />
          <button className="hero-image-action explore" type="button" aria-label="Explore NFTs" onClick={() => document.getElementById('trending')?.scrollIntoView({ behavior: 'smooth' })} />
          <button className="hero-image-action create" type="button" aria-label="Create an NFT" onClick={() => onNavigate('profile')} />
        </div>
        <article className="featured-card">
          <img src={featureImage} alt="Colorful abstract digital artwork" />
          <div className="featured-info">
            <div className="creator-line"><img className="avatar" src={artistImage} alt="" /><span className="creator-name">John Abraham</span><span className="online-dot" /></div>
            <h3>Brighten LQ</h3>
            <div className="featured-prices"><span>Auction time<strong>3h 1m 50s</strong></span><span>Current Bid<strong>0.05 ETH</strong><span>0.15 ETH</span></span></div>
            <div className="featured-buttons"><Button onClick={() => window.alert('Bid placed for Brighten LQ')}>Place a Bid</Button><Button className="red" onClick={() => onNavigate('bids')}>Details</Button></div>
          </div>
        </article>
      </section>
      <section id="trending" className="home-trending">
        <div className="section-title"><h2>Trending Bids</h2><FilterBar value={category} onChange={setCategory} /></div>
        <AssetGrid assets={visibleAssets.slice(0, 8)} savedIds={savedIds} onToggleSaved={onToggleSaved} />
      </section>
      <ScrollDown compact onNavigate={onNavigate} />
    </>
  )
}