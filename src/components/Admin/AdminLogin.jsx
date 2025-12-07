// src/components/Admin/AdminLogin.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin({ onLoggedIn, adminPath }) {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Resolve admin target path:
  const targetAdminPath = adminPath || import.meta.env.VITE_ADMIN_PATH || '/amit-admin-2025-96'

  async function login(e) {
    e.preventDefault()
    setMsg('')
    if (!user || !pass) return setMsg('Enter username and password')

    setLoading(true)
    try {
      const apiBase = import.meta.env.VITE_API_BASE || ''
      const res = await fetch(`${apiBase}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password: pass })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Login failed')
      // Save token
      if (data.token) localStorage.setItem('admin_token', data.token)
      setMsg('Logged in — redirecting...')
      onLoggedIn && onLoggedIn()
      // navigate to admin path (use navigate if path is client-side)
      // If adminPath looks like a full URL, use window.location.href
      if (/^https?:\/\//.test(targetAdminPath)) {
        window.location.href = targetAdminPath
      } else {
        navigate(targetAdminPath)
      }
    } catch (err) {
      setMsg(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h3 className="text-xl font-semibold mb-3">Admin Login</h3>

      <form onSubmit={login} className="space-y-3">
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Username"
          className="w-full border px-3 py-2 rounded"
          autoComplete="username"
        />

        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-full border px-3 py-2 rounded"
          autoComplete="current-password"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#0078AA] text-white px-4 py-2 rounded font-medium disabled:opacity-60"
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>

          <button
            type="button"
            onClick={() => { setUser(''); setPass(''); setMsg('') }}
            className="px-4 py-2 border rounded"
          >
            Clear
          </button>
        </div>
      </form>

      <div className="text-sm text-red-600 mt-2">{msg}</div>

      <div className="text-xs text-gray-500 mt-3">
        Admin path: <code className="bg-gray-100 px-1 rounded">{targetAdminPath}</code>
      </div>
    </div>
  )
}



