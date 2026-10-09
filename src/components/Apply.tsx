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
      <section id="apply" className="py-16 sm:py-20 bg-white dark:bg-[#071328]/60">
        <div className="container-page">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b3d91] via-[#082c68] to-[#051a40] px-6 py-12 text-white shadow-xl sm:px-10 sm:py-14">
              <div className="absolute inset-0 bg-grid opacity-15" />

              <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                    School of Graduate Studies · Admissions
                  </span>
                  <h2 className="mt-3 font-sans text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Take the Next Step in Your <span className="text-[#38bdf8]">IT Career</span>
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm text-sky-100/90 leading-relaxed max-w-md">
                    Applications for the {program.abbrev} program are reviewed on a rolling basis for {program.academicYear}. Elevate your credentials with a CHED-recognized, DOST-accredited degree.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setModalOpen(true)}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#0284c7] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0369a1] transition-all"
                    >
                      Submit Online Inquiry
                      <Icon name="arrow" className="h-4 w-4" />
                    </button>

                    <a
                      href={`mailto:${contact.email}?subject=MIT%20Application%20Inquiry%20-%20AY%202026-2027`}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
                    >
                      Email Graduate Office
                    </a>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {details.map((d) => (
                    <div
                      key={d.label}
                      className="rounded-xl border border-sky-400/20 bg-sky-950/40 p-4.5 backdrop-blur-sm"
                    >
                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-sky-500/20 text-[#38bdf8]">
                        <Icon name={d.icon} className="h-4 w-4" />
                      </div>
                      <div className="mt-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300">
                        {d.label}
                      </div>
                      <div className="mt-0.5 text-xs font-bold text-white">
                        {d.href ? (
                          <a href={d.href} className="hover:text-[#38bdf8] transition-colors">
                            {d.value}
                          </a>
                        ) : (
                          d.value
                        )}
                      </div>
                      <div className="mt-0.5 text-[11px] text-sky-200/70">
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

      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
