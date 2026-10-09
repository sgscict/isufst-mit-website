import { useState } from 'react'
import { contact, program } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'
import InquiryModal from './InquiryModal'

const details = [
  { icon: 'pin', label: 'Campus Office', value: contact.office, sub: contact.address },
  { icon: 'mail', label: 'Graduate Admissions', value: contact.email, href: `mailto:${contact.email}`, sub: 'Direct inquiries & PDF submissions' },
  { icon: 'phone', label: 'Telephone / Mobile', value: `${contact.phone} · ${contact.landline}`, sub: 'SGS Helpdesk' },
  { icon: 'clock', label: 'Office Hours', value: contact.hours, sub: 'In-person & online consultation' },
]

export default function Apply() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section id="apply" className="py-16 sm:py-24 bg-slate-50/60 dark:bg-navy-950/40">
        <div className="container-page">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-950 px-6 py-14 text-white shadow-2xl sm:px-12 sm:py-16">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="bg-noise absolute inset-0 opacity-40" />

              <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400">
                    School of Graduate Studies · Intake
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Take the Next Step in Your <span className="font-serif italic font-normal text-amber-400">Computing Career</span>
                  </h2>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300">
                    Applications for the {program.abbrev} program are reviewed on a rolling basis for {program.academicYear}. Elevate your credentials with a CHED-recognized, DOST-accredited degree.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setModalOpen(true)}
                      className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-all"
                    >
                      Submit Online Inquiry
                      <Icon name="arrow" className="h-4 w-4" />
                    </button>

                    <a
                      href={`mailto:${contact.email}?subject=MIT%20Application%20Inquiry%20-%20AY%202026-2027`}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
                    >
                      Email Graduate Office
                    </a>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {details.map((d) => (
                    <div
                      key={d.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    >
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-amber-400">
                        <Icon name={d.icon} className="h-4 w-4" />
                      </div>
                      <div className="mt-3 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {d.label}
                      </div>
                      <div className="mt-1 text-xs font-semibold text-white">
                        {d.href ? (
                          <a href={d.href} className="hover:text-amber-400 transition-colors">
                            {d.value}
                          </a>
                        ) : (
                          d.value
                        )}
                      </div>
                      <div className="mt-1 text-[11px] text-slate-400">
                        {d.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Inquiry Dialog */}
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
