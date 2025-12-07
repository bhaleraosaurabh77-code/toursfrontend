


// src/components/FloatingActions.jsx
import React, { useEffect, useState } from 'react'

const PHONE_NUMBER = '+917709040404'

// open WhatsApp helper
function openWhatsApp(phone = PHONE_NUMBER, text = '') {
  const clean = phone.replace(/[^0-9+]/g, '')
  const url = `https://wa.me/${clean.replace('+','') || ''}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}

// api base helper - prefer VITE var but fall back to localhost
function apiBase() {
  return import.meta.env.VITE_API_BASE || 'http://localhost:5000'
}

// NOTE: backend route constant — update here if your backend uses different path
const ENQUIRY_SUBMIT_PATH = '/api/enquiry/submit'

export default function FloatingActions() {
  const [showEnquiry, setShowEnquiry] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  // detection state (keeps existing page buttons from being duplicated)
  const [hasExistingWhatsApp, setHasExistingWhatsApp] = useState(false)
  const [hasExistingArrow, setHasExistingArrow] = useState(false)

  useEffect(() => {
    const open = () => setShowEnquiry(true)
    window.addEventListener('open-enquiry', open)

    const findWhatsApp =
      !!document.querySelector('a[href*="wa.me"], a[href*="api.whatsapp.com"]') ||
      !!document.querySelector('[title*="WhatsApp"], [aria-label*="WhatsApp"], .whatsapp, .wa-button, .whatsapp-button, .floating-whatsapp')

    const findArrow =
      !!document.querySelector('[aria-label="Back to top"], [title="Back to top"], .to-top, .scroll-top, .back-to-top')

    setHasExistingWhatsApp(!!findWhatsApp)
    setHasExistingArrow(!!findArrow)

    return () => window.removeEventListener('open-enquiry', open)
  }, [])

  const handleArrow = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(s => ({ ...s, [name]: value }))
  }

  const isEmail = (s) => /\S+@\S+\.\S+/.test(s)
  const isPhone = (s) => /[0-9]{7,15}/.test(s.replace(/\D/g, ''))

  async function submitEnquiry(e) {
    e?.preventDefault?.()
    setStatus(null)

    // basic validation
    if (!form.name?.trim() || !form.email?.trim() || !form.phone?.trim()) {
      setStatus({ type: 'error', text: 'Please enter name, phone and email.' })
      return
    }
    if (!isEmail(form.email)) {
      setStatus({ type: 'error', text: 'Please enter a valid email.' })
      return
    }
    if (!isPhone(form.phone)) {
      setStatus({ type: 'error', text: 'Please enter a valid phone number.' })
      return
    }

    setLoading(true)
    setStatus({ type: 'info', text: 'Sending...' })

    try {
      const res = await fetch(`${apiBase()}${ENQUIRY_SUBMIT_PATH}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'plan-my-tour' })
      })

      // If not OK, try to collect useful debugging info
      if (!res.ok) {
        const contentType = res.headers.get('content-type') || ''
        if (contentType.includes('application/json')) {
          const err = await res.json()
          throw new Error(err.message || err.error || `Server responded ${res.status}`)
        } else {
          const text = await res.text()
          // Show short snippet of HTML/error to help debug
          const snippet = text ? text.slice(0, 300).replace(/\s+/g, ' ') : ''
          throw new Error(`Server responded ${res.status}. Response begins with: ${snippet}`)
        }
      }

      // OK — prefer JSON but handle non-JSON gracefully
      const contentType = res.headers.get('content-type') || ''
      if (contentType.includes('application/json')) {
        const data = await res.json()
        setStatus({ type: 'success', text: data.message || 'Sent — we will contact you soon!' })
      } else {
        setStatus({ type: 'success', text: 'Sent — server returned non-JSON response.' })
      }

      setForm({ name: '', phone: '', email: '', message: '' })
      // close modal after a short delay so user sees success
      setTimeout(() => setShowEnquiry(false), 1100)
    } catch (err) {
      console.error('Enquiry submit error:', err)
      setStatus({ type: 'error', text: err.message || 'Send failed' })
    } finally {
      setLoading(false)
    }
  }

  const rightOffset = hasExistingWhatsApp || hasExistingArrow ? 'right-28' : 'right-6'

  return (
    <>
      {/* Floating stack */}
      <div className={`fixed ${rightOffset} bottom-48 flex flex-col items-center gap-4 z-[70] pointer-events-auto`}>
        {!hasExistingArrow && ( 
          <button
            onClick={handleArrow}
            aria-label="Back to top"
            title="Back to top"
            className="w-14 h-14 rounded-full bg-yellow-400 shadow-2xl flex items-center justify-center transform transition-transform hover:scale-105 ring-2 ring-white"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 14l6-6 6 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )} 

         {!hasExistingWhatsApp && (
          <button
            onClick={() => openWhatsApp(PHONE_NUMBER, "Hi Amit Tours — I'm interested in planning a trip.")}
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
            className="w-16 h-16 rounded-full bg-green-500 shadow-2xl flex items-center justify-center transform transition-transform hover:scale-105 ring-4 ring-white"
          >
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.52 3.48A11.92 11.92 0 0012.01.04 11.99 11.99 0 001.8 15.9L1 22l6.44-1.69A11.96 11.96 0 0020.52 3.48z"/>
              <path fill="white" d="M17.6 14.1c-.3-.15-1.75-.86-2.02-.95-.27-.1-.47-.15-.67.15-.2.3-.77.95-.95 1.15-.18.2-.36.22-.67.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.05-.17-.3-.02-.46.13-.6.13-.12.3-.3.45-.45.15-.15.2-.25.3-.43.1-.17.05-.33 0-.48-.05-.15-.67-1.63-.92-2.23-.24-.58-.48-.5-.67-.5-.17 0-.37 0-.57 0-.2 0-.52.07-.79.33-.27.27-1.02 1-1.02 2.45 0 1.45 1.05 2.85 1.2 3.04.15.2 2.08 3.18 5.05 4.45 2.97 1.28 3.01.85 3.56.8.55-.05 1.75-.7 2-1.37.25-.67.25-1.24.18-1.37-.07-.12-.27-.2-.57-.35z"/>
            </svg>
          </button>
        )}
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[80]" onClick={() => setShowEnquiry(false)} />
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative">
              <button
                onClick={() => setShowEnquiry(false)}
                className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-2"
                aria-label="Close"
              >
                ✕
              </button>

              <h3 className="text-xl font-semibold mb-3">Plan My Tour — Enquiry</h3>

              <form onSubmit={submitEnquiry} className="space-y-3">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full border rounded px-3 py-2"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone (required)"
                  type="tel"
                  className="w-full border rounded px-3 py-2"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  type="email"
                  className="w-full border rounded px-3 py-2"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message / Requirements"
                  rows={4}
                  className="w-full border rounded px-3 py-2"
                />

                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-[#E63946] to-[#D62839] text-white px-4 py-2 rounded disabled:opacity-60"
                  >
                    {loading ? 'Sending…' : 'Submit'}
                  </button>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(PHONE_NUMBER)}
                    className="flex-1 border px-4 py-2 rounded flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M20.52 3.48A11.92 11.92 0 0012.01.04 11.99 11.99 0 001.8 15.9L1 22l6.44-1.69A11.96 11.96 0 0020.52 3.48z"/>
                      <path fill="currentColor" d="M17.6 14.1c-.3-.15-1.75-.86-2.02-.95-.27-.1-.47-.15-.67.15-.2.3-.77.95-.95 1.15-.18.2-.36.22-.67.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.05-.17-.3-.02-.46.13-.6.13-.12.3-.3.45-.45.15-.15.2-.25.3-.43.1-.17.05-.33 0-.48-.05-.15-.67-1.63-.92-2.23-.24-.58-.48-.5-.67-.5-.17 0-.37 0-.57 0-.2 0-.52.07-.79.33-.27.27-1.02 1-1.02 2.45 0 1.45 1.05 2.85 1.2 3.04.15.2 2.08 3.18 5.05 4.45 2.97 1.28 3.01.85 3.56.8.55-.05 1.75-.7 2-1.37.25-.67.25-1.24.18-1.37-.07-.12-.27-.2-.57-.35z"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>

                {/* status */}
                {status && (
                  <div className={`text-sm mt-2 ${status.type === 'error' ? 'text-red-600' : status.type === 'success' ? 'text-green-600' : 'text-gray-700'}`}>
                    {status.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </>
      )}
    </>
  )
}