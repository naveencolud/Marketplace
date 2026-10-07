import { useState } from 'react'
import { UserRound } from 'lucide-react'
import Button from '../components/Button.jsx'

const settingTabs = ['Profile', 'Application', 'Security', 'Activity', 'Payment Method', 'API']

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Profile')
  const save = (event) => { event.preventDefault(); window.alert(`${activeTab} settings saved`) }
  return (
    <>
      <nav className="settings-tabs" aria-label="Settings categories">{settingTabs.map((tab) => <button type="button" key={tab} className={`settings-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>)}</nav>
      <div className="settings-columns">
        <section className="settings-section"><h2>User profile</h2><form className="form-panel" onSubmit={save}><label className="form-field">Full Name<input defaultValue="John Smith" /></label><div className="form-user"><span className="stat-icon"><UserRound size={17} /></span><div><strong>John Smith</strong><span>Welcome Setting Page</span></div></div><Button type="submit">Save</Button></form></section>
        <section className="settings-section"><h2>Update Profile</h2><form className="form-panel" onSubmit={save}><label className="form-field">Email<input type="email" defaultValue="john.smith@example.com" /></label><label className="form-field">Password<input type="password" defaultValue="marketplace" /></label><Button type="submit">Save</Button></form></section>
      </div>
      <section className="settings-section personal-info"><h2>Personal Information</h2><form className="form-panel" onSubmit={save}>{['Location', 'Website', 'Twitter', 'Instagram', 'Wallet address', 'Bio'].map((field) => <label className="form-field" key={field}>{field}<input placeholder={`Enter ${field.toLowerCase()}`} /></label>)}<Button type="submit">Save</Button></form></section>
    </>
  )
}