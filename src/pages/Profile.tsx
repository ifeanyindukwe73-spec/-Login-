import React from 'react'
import { useAuth } from '../components/AuthContext'

const Profile: React.FC = () => {
  const { user } = useAuth()

  return (
    <div style={{ padding: 20 }}>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user?.username}</p>
      <p><strong>Role:</strong> {user?.role}</p>
    </div>
  )
}

export default Profile
