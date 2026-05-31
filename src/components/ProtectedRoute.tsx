import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import type { Role } from '../types/Role'

type Props = {
  children: React.ReactElement
  requiredRole?: Role
}

const ProtectedRoute: React.FC<Props> = ({ children, requiredRole }) => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" replace />

  // If user is authenticated but lacks the required role, send to dashboard
  if (requiredRole && user.role !== requiredRole) return <Navigate to="/dashboard" replace />

  return children
}

export default ProtectedRoute
