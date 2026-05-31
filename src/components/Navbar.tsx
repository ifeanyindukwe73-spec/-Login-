import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './AuthContext'

const Navbar: React.FC = () => {
  const { user, logout } = useAuth()

  if (!user) return null

  return (
    <nav style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #ddd', alignItems: 'center' }}>
      <div style={{ flex: 1, textAlign: 'left' }}>
        <strong>{user.username}</strong> ({user.role})
      </div>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      {user.role === 'Admin' && <Link to="/settings">Settings</Link>}
      <button onClick={logout} style={{ marginLeft: 12 }}>Logout</button>
    </nav>
  )
}

export default Navbar
