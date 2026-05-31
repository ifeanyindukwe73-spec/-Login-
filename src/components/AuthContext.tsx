import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Role } from '../types/Role'

type User = {
  username: string
  role: Role
}

type AuthContextType = {
  user: User | null
  login: (username: string, role: Role) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const raw = localStorage.getItem('user')
      return raw ? (JSON.parse(raw) as User) : null
    } catch {
      return null
    }
  })
  const navigate = useNavigate()

  const login = (username: string, role: Role) => {
    const u = { username, role }
    setUser(u)
    try {
      localStorage.setItem('user', JSON.stringify(u))
    } catch {}
    navigate('/dashboard')
  }

  const logout = () => {
    setUser(null)
    try {
      localStorage.removeItem('user')
    } catch {}
    navigate('/login')
  }

  // keep localStorage in sync if user is changed elsewhere
  useEffect(() => {
    try {
      if (user) localStorage.setItem('user', JSON.stringify(user))
      else localStorage.removeItem('user')
    } catch {}
  }, [user])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
