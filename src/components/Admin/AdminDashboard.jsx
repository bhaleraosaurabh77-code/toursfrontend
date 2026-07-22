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

  // Helper to normalise backend response
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
        headers: {
          Authorization: token || "",
        },
      });

      const contentType = res.headers.get("content-type") || "";

      let data;

      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(
          `Server returned ${res.status}. Response: ${text.slice(0, 300)}`
        );
      }

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("admin_token");
          setLeads([]);
          throw new Error(
            data.message || "Invalid token — please login again."
          );
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
      [
        "CreatedAt",
        "PackageId",
        "PackageTitle",
        "Name",
        "Phone",
        "Email",
        "Message",
        "Source",
      ],

      ...leads.map((l) => [
        l.createdAt ? new Date(l.createdAt).toLocaleString() : "",
        l.packageId || "",
        l.packageTitle || "",
        l.name || "",
        l.phone || "",
        l.email || "",
        l.message || l.note || "",
        l.source || "",
      ]),
    ];

    const csv = rows
      .map((r) =>
        r
          .map((cell) =>
            `"${String(cell || "").replace(/"/g, '""')}"`
          )
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv",
    });

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

      const res = await fetch(
        `${apiBase}/api/admin/sync-to-sheets`,
        {
          method: "POST",
          headers: {
            Authorization: token || "",
          },
        }
      );

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

    const adminPath =
      import.meta.env.VITE_ADMIN_PATH ||
      "/amit-admin-2025-96";

    navigate(adminPath);
  }

  const adminLoginPath =
    import.meta.env.VITE_ADMIN_PATH ||
    "/amit-admin-2025-96";
      // If no token — show login screen
  if (!getToken()) {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6">

        <div className="flex justify-end mb-4">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm transition"
          >
            ← Back to Home
          </button>
        </div>

        <div className="bg-white border rounded-xl shadow p-5 sm:p-6">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            Admin Dashboard
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            You are not logged in. Please login to view leads and manage enquiries.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">

            <button
              onClick={() => navigate(adminLoginPath)}
              className="w-full sm:w-auto px-5 py-3 bg-[#0078AA] text-white rounded-lg hover:bg-[#00618a] transition"
            >
              Go to Login
            </button>

            <button
              onClick={() => {
                setMsg("");
                fetchLeads();
              }}
              className="w-full sm:w-auto px-5 py-3 border rounded-lg hover:bg-gray-50 transition"
            >
              I already logged in — Refresh
            </button>

          </div>

          <div className="text-sm text-gray-600 mt-4">
            {msg}
          </div>

        </div>

      </div>
    );
  }

  // Dashboard
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">

      {/* Back */}

      <div className="flex justify-end mb-5">

        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm transition"
        >
          ← Back to Home
        </button>

      </div>

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

        <h2 className="text-2xl sm:text-3xl font-semibold">
          Admin Dashboard
        </h2>

        <div className="flex flex-wrap gap-3">

          <button
            onClick={fetchLeads}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
          >
            Refresh
          </button>

          <button
            onClick={exportCSV}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
          >
            Export CSV
          </button>

          <button
            onClick={syncToSheets}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sync to Sheets
          </button>

          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>

        </div>

      </div>

      {/* Status */}

      <div className="text-sm text-gray-600 mb-4">
        {msg}
      </div>

      {loading && (
        <div className="text-sm text-gray-500 mb-4">
          Loading...
        </div>
      )}

      {/* Leads */}

      <div className="space-y-4">

        {leads.length === 0 && !loading && (
          <div className="text-center text-gray-500 py-8">
            No leads yet.
          </div>
        )}

        {leads.map((l) => (

          <div
            key={l._id || l.id}
            className="bg-white border rounded-xl p-4 sm:p-5 shadow-sm"
          >

            <div className="text-xs text-gray-500 break-words">

              {(l.createdAt &&
                new Date(l.createdAt).toLocaleString()) ||
                ""}

              {" • "}

              {l.packageId || ""}

            </div>

            <h3 className="mt-2 text-lg font-semibold break-words">
              {l.packageTitle || "—"}
            </h3>

            <div className="mt-2 text-sm sm:text-base break-words">
              <strong>{l.name || "—"}</strong>
            </div>

            <div className="text-sm text-gray-700 break-all">
              {l.phone || "—"}
            </div>

            <div className="text-sm text-gray-700 break-all">
              {l.email || "—"}
            </div>

            <div className="mt-3 text-sm text-gray-700 whitespace-pre-wrap break-words">
              {l.message || l.note || ""}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}