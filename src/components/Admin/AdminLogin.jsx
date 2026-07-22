// src/components/Admin/AdminLogin.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin({ onLoggedIn, adminPath }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Resolve admin target path
  const targetAdminPath =
    adminPath ||
    import.meta.env.VITE_ADMIN_PATH ||
    "/amit-admin-2025-96";

  async function login(e) {
    e.preventDefault();

    setMsg("");

    if (!user || !pass) {
      return setMsg("Enter username and password");
    }

    setLoading(true);

    try {
      const apiBase = import.meta.env.VITE_API_BASE || "";

      const res = await fetch(`${apiBase}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          password: pass,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.token) {
        localStorage.setItem("admin_token", data.token);
      }

      setMsg("Logged in — redirecting...");

      onLoggedIn && onLoggedIn();

      if (/^https?:\/\//.test(targetAdminPath)) {
        window.location.href = targetAdminPath;
      } else {
        navigate(targetAdminPath);
      }
    } catch (err) {
      setMsg(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 py-6 sm:py-10">

      <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-5 sm:p-8">

        <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#0078AA] mb-6">
          Admin Login
        </h3>

        <form onSubmit={login} className="space-y-4">

          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Username"
            autoComplete="username"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0078AA]"
          />

          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0078AA]"
          />

          <div className="flex flex-col sm:flex-row gap-3">

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:flex-1 bg-[#0078AA] hover:bg-[#006892] text-white py-3 rounded-lg font-semibold transition disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <button
              type="button"
              onClick={() => {
                setUser("");
                setPass("");
                setMsg("");
              }}
              className="w-full sm:flex-1 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Clear
            </button>

          </div>

        </form>

        {msg && (
          <div className="mt-4 text-center text-sm text-red-600 break-words">
            {msg}
          </div>
        )}

        <div className="mt-6 text-xs text-gray-500 break-all">

          Admin path:

          <code className="ml-1 bg-gray-100 px-2 py-1 rounded">
            {targetAdminPath}
          </code>

        </div>

      </div>

    </div>
  );
}