// import React, { useEffect, useState } from 'react'

// function getToken(){ return localStorage.getItem('admin_token') }

// export default function AdminDashboard(){
//   const [leads, setLeads] = useState([])
//   const [msg, setMsg] = useState('')
//   const [loading, setLoading] = useState(false)

//   async function fetchLeads(){
//     try {
//       setMsg('')
//       setLoading(true)
//       const apiBase = import.meta.env.VITE_API_BASE || ''
//       const res = await fetch(`${apiBase}/api/enquiry/all`, {
//         headers: { Authorization: `Bearer ${getToken()}` }
//       })
//       const data = await res.json()
//       if (!res.ok) {
//         if (res.status === 401) localStorage.removeItem('admin_token')
//         throw new Error(data.message || 'Failed to fetch leads')
//       }
//       setLeads(data.leads || [])
//     } catch (err) {
//       setMsg(err.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(()=>{ fetchLeads() }, [])

//   function exportCSV(){
//     if (leads.length === 0) return
//     const rows = [['CreatedAt','PackageId','PackageTitle','Name','Phone','Email','Note','Source'],
//       ...leads.map(l => [l.createdAt, l.packageId, l.packageTitle, l.name, l.phone, l.email||'', l.note||'', l.source||''])
//     ]
//     const csv = rows
//       .map(r => r.map(cell => `"${String(cell||'').replace(/"/g,'""')}"`).join(','))
//       .join('\n')
//     const blob = new Blob([csv], { type: 'text/csv' })
//     const url = URL.createObjectURL(blob)
//     const a = document.createElement('a')
//     a.href = url
//     a.download = 'leads.csv'
//     a.click()
//     URL.revokeObjectURL(url)
//   }

//   async function syncToSheets(){
//     try {
//       setMsg('Syncing to Google Sheets...')
//       const apiBase = import.meta.env.VITE_API_BASE || ''
//       const res = await fetch(`${apiBase}/api/admin/sync-to-sheets`, {
//         method: 'POST',
//         headers: { Authorization: `Bearer ${getToken()}` }
//       })
//       const data = await res.json()
//       if (!res.ok) throw new Error(data.message || 'Sync failed')
//       setMsg(data.message || 'Synced')
//     } catch (err) {
//       setMsg(err.message)
//     }
//   }

//   function logout(){
//     localStorage.removeItem('admin_token')
//     setMsg('Logged out')
//     setLeads([])
//     window.location.href = '/admin/login'
//   }

//   return (
//     <div className="p-4 max-w-4xl mx-auto">

//       {/* 🔙 Back to Home Button */}
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={() => window.location.href = "/"}
//           className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm transition"
//         >
//           ← Back to Home
//         </button>
//       </div>

//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
//         <div className="flex items-center gap-2">
//           <button onClick={fetchLeads} className="px-3 py-2 border rounded">Refresh</button>
//           <button onClick={exportCSV} className="px-3 py-2 border rounded">Export CSV</button>
//           <button onClick={syncToSheets} className="px-3 py-2 bg-blue-600 text-white rounded">Sync to Sheets</button>
//           <button onClick={logout} className="px-3 py-2 bg-red-600 text-white rounded">Logout</button>
//         </div>
//       </div>

//       <div className="text-sm text-gray-600 mb-4">{msg}</div>
//       {loading && <div className="text-sm text-gray-500 mb-2">Loading...</div>}

//       <div className="grid gap-3">
//         {leads.length === 0 && !loading && (
//           <div className="text-sm text-gray-500">No leads yet.</div>
//         )}
//         {leads.map(l => (
//           <div key={l.id} className="p-3 border rounded">
//             <div className="text-xs text-gray-500">{l.createdAt} • {l.packageId}</div>
//             <div className="font-semibold">{l.packageTitle}</div>
//             <div>{l.name} — {l.phone} — {l.email}</div>
//             <div className="text-sm text-gray-700 mt-1">{l.note}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }


// src/components/Admin/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function getToken() {
  return localStorage.getItem("admin_token");
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // Helper to normalise backend response (array or { leads: [] })
  function normalizeLeadsResponse(data) {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.leads)) return data.leads;
    if (Array.isArray(data.enquiries)) return data.enquiries;
    return [];
  }

  async function fetchLeads() {
    try {
      setMsg("");
      setLoading(true);
      const apiBase = import.meta.env.VITE_API_BASE || "";
      const token = getToken();

      if (!token) {
        setMsg("No admin token found. Please login to view leads.");
        setLeads([]);
        return;
      }

      const res = await fetch(`${apiBase}/api/enquiry/all`, {
        headers: { Authorization: token || "" } // send raw token (backend expects raw token)
      });

      // parse JSON safely
      const contentType = res.headers.get("content-type") || "";
      let data;
      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Server returned ${res.status}. Response: ${text.slice(0, 300)}`);
      }

      if (!res.ok) {
        if (res.status === 401) {
          // token invalid/expired — clear and tell user to login again
          localStorage.removeItem("admin_token");
          setLeads([]);
          throw new Error(data.message || "Invalid token — please login again.");
        }
        throw new Error(data.message || "Failed to fetch leads");
      }

      const normalized = normalizeLeadsResponse(data);
      setLeads(normalized);
    } catch (err) {
      setMsg(err.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLeads();
    // Also listen for storage changes (another tab did login) and refresh
    const onStorage = (e) => {
      if (e.key === "admin_token") {
        fetchLeads();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function exportCSV() {
    if (leads.length === 0) {
      setMsg("No leads to export.");
      return;
    }
    const rows = [
      ["CreatedAt", "PackageId", "PackageTitle", "Name", "Phone", "Email", "Message", "Source"],
      ...leads.map((l) => [
        l.createdAt ? new Date(l.createdAt).toLocaleString() : "",
        l.packageId || "",
        l.packageTitle || "",
        l.name || "",
        l.phone || "",
        l.email || "",
        l.message || l.note || "",
        l.source || ""
      ])
    ];
    const csv = rows.map((r) => r.map((cell) => `"${String(cell || "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function syncToSheets() {
    try {
      setMsg("Syncing to Google Sheets...");
      const apiBase = import.meta.env.VITE_API_BASE || "";
      const token = getToken();
      if (!token) {
        setMsg("No token — please login before syncing.");
        return;
      }
      const res = await fetch(`${apiBase}/api/admin/sync-to-sheets`, {
        method: "POST",
        headers: { Authorization: token || "" }
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("admin_token");
        }
        throw new Error(data.message || "Sync failed");
      }
      setMsg(data.message || "Synced");
    } catch (err) {
      setMsg(err.message || "Sync failed");
    }
  }

  function logout() {
    localStorage.removeItem("admin_token");
    setMsg("Logged out");
    setLeads([]);
    // navigate to login page (use VITE_ADMIN_PATH if set)
    const adminPath = import.meta.env.VITE_ADMIN_PATH || "/amit-admin-2025-96";
    navigate(adminPath);
  }

  const adminLoginPath = import.meta.env.VITE_ADMIN_PATH || "/amit-admin-2025-96";

  // If no token — show clear login CTA
  if (!getToken()) {
    return (
      <div className="p-4 max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm transition"
          >
            ← Back to Home
          </button>
        </div>

        <div className="p-6 border rounded bg-white shadow">
          <h2 className="text-2xl font-semibold mb-2">Admin Dashboard</h2>
          <p className="mb-4 text-sm text-gray-600">
            You are not logged in. Please login to view leads and manage enquiries.
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => navigate(adminLoginPath)}
              className="px-4 py-2 bg-[#0078AA] text-white rounded"
            >
              Go to Login
            </button>

            <button
              onClick={() => {
                // helpful if you logged in another tab — try to fetch again
                setMsg("");
                fetchLeads();
              }}
              className="px-4 py-2 border rounded"
            >
              I already logged in — Refresh
            </button>
          </div>

          <div className="text-sm text-gray-600 mt-4">{msg}</div>
        </div>
      </div>
    );
  }

  // Normal dashboard view when token exists
  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Back to Home */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm transition"
        >
          ← Back to Home
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
        <div className="flex items-center gap-2">
          <button onClick={fetchLeads} className="px-3 py-2 border rounded">
            Refresh
          </button>
          <button onClick={exportCSV} className="px-3 py-2 border rounded">
            Export CSV
          </button>
          <button onClick={syncToSheets} className="px-3 py-2 bg-blue-600 text-white rounded">
            Sync to Sheets
          </button>
          <button onClick={logout} className="px-3 py-2 bg-red-600 text-white rounded">
            Logout
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-600 mb-4">{msg}</div>
      {loading && <div className="text-sm text-gray-500 mb-2">Loading...</div>}

      <div className="grid gap-3">
        {leads.length === 0 && !loading && <div className="text-sm text-gray-500">No leads yet.</div>}

        {leads.map((l) => (
          <div key={l._id || l.id} className="p-3 border rounded bg-white">
            <div className="text-xs text-gray-500">
              {(l.createdAt && new Date(l.createdAt).toLocaleString()) || ""} • {l.packageId || ""}
            </div>
            <div className="font-semibold">{l.packageTitle || "—"}</div>
            <div>
              {l.name || "—"} — {l.phone || "—"} — {l.email || "—"}
            </div>
            <div className="text-sm text-gray-700 mt-1">{l.message || l.note || ""}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
