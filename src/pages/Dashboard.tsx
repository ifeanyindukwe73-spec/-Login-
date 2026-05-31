import React from 'react'
import { useAuth } from '../components/AuthContext'

const AdminPanel: React.FC = () => (
  <div>
    <h3>Admin Controls</h3>
    <p>Manage users, view system metrics, and configure the app.</p>
  </div>
)

const EditorPanel: React.FC = () => (
  <div>
    <h3>Content Editor</h3>
    <p>Create and edit content here.</p>
  </div>
)

const ViewerPanel: React.FC = () => (
  <div>
    <h3>Reports</h3>
    <p>Read-only reports and dashboards.</p>
  </div>
)

const Dashboard: React.FC = () => {
  const { user } = useAuth()

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.username}. Role: {user?.role}</p>

      {user?.role === 'Admin' && <AdminPanel />}
      {user?.role === 'Editor' && <EditorPanel />}
      {user?.role === 'Viewer' && <ViewerPanel />}
    </div>
  )
}

export default Dashboard
