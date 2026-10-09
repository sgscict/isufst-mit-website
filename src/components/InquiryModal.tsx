import { useState } from 'react'
import { contact, program } from '../data'
import Icon from './Icon'

type InquiryModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [undergradDegree, setUndergradDegree] = useState('')
  const [inquiryType, setInquiryType] = useState('Admission Eligibility')
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Prepare mailto link or simulate immediate submission
    const subject = encodeURIComponent(`[MIT Inquiry] ${inquiryType} - ${fullName}`)
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nUndergraduate Degree: ${undergradDegree}\nInquiry Category: ${inquiryType}\n\nI would like to inquire about the Master in Information Technology program at ISUFST.`
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-navy-900 animate-enter-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 bg-navy-950 px-6 py-5 text-white dark:border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-400">
              School of Graduate Studies · CICT
            </span>
            <h3 className="font-display text-lg font-bold sm:text-xl text-white">
              Graduate Program Inquiry
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-navy-200 hover:bg-white/10 hover:text-white"
            aria-label="Close modal"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                <Icon name="check" className="h-7 w-7" />
              </div>
              <h4 className="mt-4 font-display text-xl font-bold text-navy-950 dark:text-white">
                Inquiry Dispatch Prepared!
              </h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-navy-100/70">
                Your email client has been launched with your inquiry addressed to{' '}
                <span className="font-semibold text-navy-900 dark:text-white">{contact.email}</span>.
                The graduate admissions committee typically responds within 1–2 working days.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 rounded-xl bg-navy-900 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-navy-800 dark:bg-amber-500 dark:text-navy-950"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Submit your credentials for expedited evaluation by Program Chair{' '}
                <strong>{program.chair}</strong> and the admissions office.
              </p>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Maria Santos, PECE"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-navy-900 focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@organization.ph"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-navy-900 focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+63 9XX XXX XXXX"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-navy-900 focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Undergraduate Degree / Major *
                </label>
                <input
                  type="text"
                  required
                  value={undergradDegree}
                  onChange={(e) => setUndergradDegree(e.target.value)}
                  placeholder="e.g. BS in Information Technology (2022)"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-navy-900 focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Inquiry Topic
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-navy-900 focus:outline-none dark:border-white/15 dark:bg-navy-800 dark:text-white"
                >
                  <option value="Admission Eligibility">Admission Eligibility & Bridging Subjects</option>
                  <option value="DOST-SEI STRAND Scholarship">DOST-SEI STRAND Scholarship Details</option>
                  <option value="Curriculum & Executive Schedule">Executive Saturday Schedule & HyFlex Delivery</option>
                  <option value="Capstone & Research Advising">Capstone Research Agenda / Industry Partnership</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-navy-900 to-navy-800 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-navy-900/20 hover:from-navy-800 hover:to-navy-700 dark:from-amber-500 dark:to-amber-400 dark:text-navy-950"
                >
                  Send Inquiry to Graduate Office
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-400">
                You can also email directly: <a href={`mailto:${contact.email}`} className="underline text-teal-600 dark:text-teal-400">{contact.email}</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
