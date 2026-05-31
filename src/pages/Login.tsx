import React, { useState } from 'react'
import { useAuth } from '../components/AuthContext'
import type { Role } from '../types/Role'

const Login: React.FC = () => {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [role, setRole] = useState<Role>('Viewer')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username) return alert('Please enter a username')
    login(username, role)
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, width: 320 }}>
        <label>
          Name
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>

        <label>
          Role
          <select value={role} onChange={(e) => setRole(e.target.value as any)}>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
