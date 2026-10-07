import { useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'
import ScrollDown from './pages/ScrollDown.jsx'
import Bids from './pages/Bids.jsx'
import Saved from './pages/Saved.jsx'
import Collection from './pages/Collection.jsx'
import Profile from './pages/Profile.jsx'
import Settings from './pages/Settings.jsx'
import './App.css'

const pageTitles = { home: 'Discover', bids: 'Bids', saved: 'Saved Items', collections: 'Collections', profile: 'Profile', settings: 'Setting' }

function App() {
  const [activePage, setActivePage] = useState('home')
  const [search, setSearch] = useState('')
  const [savedIds, setSavedIds] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  const toggleSaved = (id) => setSavedIds((current) => current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id])
  const pageProps = useMemo(() => ({ search, savedIds, onToggleSaved: toggleSaved }), [search, savedIds])
  const pages = {
    home: <Home {...pageProps} onNavigate={setActivePage} />,
    bids: <Bids />,
    saved: <Saved {...pageProps} />,
    collections: <Collection {...pageProps} />,
    profile: <Profile {...pageProps} />,
    settings: <Settings />,
    activity: <ScrollDown />,
  }

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="app-main">
        <Navbar search={search} onSearch={setSearch} />
        <main className="page-content" key={activePage}>
          {activePage !== 'home' && activePage !== 'activity' && (
            <div className="page-heading">
              <div><h1>{pageTitles[activePage]}</h1><p>Welcome {pageTitles[activePage]} Page</p></div>
              <div className="breadcrumbs"><span>Home</span><b>›</b>{pageTitles[activePage]}</div>
            </div>
          )}
          {pages[activePage]}
        </main>
      </div>
    </div>
  )
}

export default App
