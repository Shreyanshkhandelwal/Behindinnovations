import PageHeader from '../components/PageHeader.jsx'
import { CONTACT } from '../data/contact.js'

const WARNING_SIGNS = [
  'Extra hyphens, e.g. behind-innovations.com',
  'A number swapped for a letter, e.g. behind1nnovations.com',
  'A different ending, such as .net, .org or .info',
  'A missing or doubled letter in the name',
]

const PROTECT_STEPS = [
  'Do not share passwords, OTPs, UPI PINs or card security codes with anyone claiming to represent us.',
  'Be cautious of urgent payment requests, unexpected job or investment offers, and requests for identity documents sent through social media or unsolicited messages.',
  'Verify requests independently, through a contact channel you already trust — never through a phone number or link supplied in the suspicious message itself.',
]

export default function ScamAlert() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-700 font-bold text-xs tracking-widest uppercase">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
          Scam Alert
        </div>

        <PageHeader title="Recognise us. Stay alert." accent="amber" />

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Scammers may copy our name, branding, website content or publicly shared details to impersonate Behind
          Innovations. A familiar logo or a convincing message does not prove that a website, profile or account is
          genuine.
        </p>

        {/* Official site */}
        <div className="glass-card-light p-8 rounded-3xl space-y-4 border-t-4 border-t-sky-500">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block">
            Our current official website
          </span>
          <p className="font-heading text-xl sm:text-2xl font-bold text-slate-900 break-all">{CONTACT.website}</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Check the complete address in your browser before sharing information or making a payment. Use a
            trusted bookmark, or type the official address yourself. A padlock icon or HTTPS alone does not
            establish who operates a website.
          </p>
        </div>

        {/* Lookalike domains */}
        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold text-slate-900">Watch for lookalike domains</h3>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            Scammers often buy domain names that look almost identical to ours. Extra hyphens, missing letters,
            different endings, or a number replacing a letter can all make an address look familiar at a glance.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WARNING_SIGNS.map((sign) => (
              <li key={sign} className="flex gap-3 items-start p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <span className="text-amber-500 font-bold shrink-0">⚠</span>
                <span className="text-sm text-slate-700 font-medium">{sign}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 italic max-w-3xl">
            These are illustrative examples only, not confirmed scam reports or findings about who owns them. None
            of them is our official website address, which is listed above.
          </p>
        </div>

        {/* Protect yourself */}
        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold text-slate-900">Pause. Verify. Protect.</h3>
          <ul className="space-y-3">
            {PROTECT_STEPS.map((step) => (
              <li key={step} className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                <span className="text-sm text-slate-700 leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* If something looks suspicious */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            If something looks suspicious
          </span>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200 max-w-3xl">
            Stop interacting with the sender. Save the website address, screenshots and messages, then report the
            impersonation through the platform where you found it. If you have already shared payment details or
            sent money, contact your bank or payment provider promptly, and change any exposed passwords through
            the genuine service.
          </p>
        </div>

        <p className="text-xs text-slate-500 italic max-w-3xl">
          This notice provides awareness guidance; it does not verify other websites or prevent impersonation.
        </p>
      </div>
    </section>
  )
}
