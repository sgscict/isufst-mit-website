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
    const subject = encodeURIComponent(`[MIT Inquiry] ${inquiryType} - ${fullName}`)
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nUndergraduate Degree: ${undergradDegree}\nInquiry Category: ${inquiryType}\n\nI would like to inquire about the Master in Information Technology program at ISUFST.`
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-[#071328]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-[#0b3d91] px-6 py-4.5 text-white">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#38bdf8]">
              School of Graduate Studies · CICT
            </span>
            <h3 className="font-sans text-lg font-bold sm:text-xl text-white">
              Graduate Program Inquiry
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/80 hover:bg-white/10"
            aria-label="Close modal"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-sky-100 text-[#0b3d91] dark:bg-sky-950 dark:text-sky-300">
                <Icon name="check" className="h-6 w-6" />
              </div>
              <h4 className="mt-3 font-sans text-lg font-bold text-slate-900 dark:text-white">
                Inquiry Dispatch Prepared!
              </h4>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Your email client has been launched with your inquiry addressed to{' '}
                <span className="font-semibold text-[#0b3d91] dark:text-sky-300">{contact.email}</span>.
                The graduate admissions committee typically responds within 1–2 working days.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-5 rounded-xl bg-[#0b3d91] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#082a66]"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <p className="text-xs text-slate-500 leading-relaxed">
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
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0b3d91] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
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
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0b3d91] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
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
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0b3d91] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
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
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0b3d91] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Inquiry Topic
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-[#0b3d91] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
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
                  className="w-full rounded-xl bg-[#0b3d91] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#082a66] transition-colors"
                >
                  Send Inquiry to Graduate Office
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-400">
                Direct email: <a href={`mailto:${contact.email}`} className="text-[#0284c7] underline">{contact.email}</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
