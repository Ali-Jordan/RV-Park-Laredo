import { MapPin, Phone, AlertCircle, Check, ArrowRight, AlertTriangle } from 'lucide-react';

const extras = [
  { label: 'Extra adult',      price: '+$50/mo' },
  { label: 'Storage',          price: '$125/mo' },
  { label: 'Internet',         price: '$55/mo + tax' },
  { label: 'Security deposit', price: '$100 refundable' },
  { label: 'Late fee',         price: '$35' },
];

const policies = [
  'Cash or check only — no credit cards',
  'No refunds',
  'No prorating',
  'Pets allowed with proof of vaccinations',
  'Restricted breeds: Pit Bull, Rottweiler, Doberman',
];

export function About() {
  return (
    <section id="reserve" className="relative overflow-hidden" style={{ background: '#FDF6EE', paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left */}
          <div className="flex flex-col">
            <p className="font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 text-desert-burnt">About The Park</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-desert-dark mb-3 sm:mb-5 leading-tight">
              Trusted RV Parking
              <span className="text-desert-burnt"> Near I-35</span>
            </h2>
            <p className="text-desert-dark/70 mb-6 sm:mb-7 leading-relaxed text-sm sm:text-base">
              Vaquero Village RV Park is on Highway 83 North in Laredo, TX — minutes from I-35 and Colombia Road 255.
              Easy access for travelers, workers, and long-term residents who need reliable RV parking.
            </p>

            {/* Location */}
            <div className="rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6" style={{ background: '#FFF8F2', border: '1px solid rgba(161,78,44,0.15)' }}>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-4 h-4 text-desert-burnt mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-desert-dark text-sm">16594 Hwy 83 North</div>
                  <div className="text-desert-dark/50 text-xs mt-0.5">Laredo, TX 78045</div>
                  <div className="text-desert-dark/50 text-xs mt-0.5">Between Colombia Rd 255 and I-35 — approx. 15 min from downtown</div>
                </div>
              </div>
              <a href="https://share.google/MI9CRqTyQ80b8gyln" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-desert-burnt font-medium text-xs hover:text-desert-brown transition-colors">
                View on Google Maps <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* Additional charges */}
            <h3 className="font-bold text-desert-dark text-sm sm:text-base mb-3">Additional Charges</h3>
            <div className="rounded-xl overflow-hidden mb-5 sm:mb-6" style={{ border: '1px solid rgba(161,78,44,0.1)' }}>
              {extras.map(({ label, price }, i) => (
                <div key={label} className="flex justify-between items-center px-4 py-2.5 sm:py-3"
                  style={{ background: i % 2 === 0 ? '#FFF8F2' : 'transparent', borderBottom: i < extras.length - 1 ? '1px solid rgba(161,78,44,0.07)' : 'none' }}>
                  <span className="text-desert-dark/65 text-xs">{label}</span>
                  <span className="font-semibold text-desert-dark text-xs">{price}</span>
                </div>
              ))}
            </div>

            {/* Policies */}
            <h3 className="font-bold text-desert-dark text-sm sm:text-base mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-desert-burnt" />
              Park Policies
            </h3>
            <ul className="space-y-2 mb-6">
              {policies.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-xs text-desert-dark/80">
                  <Check className="w-3.5 h-3.5 text-desert-burnt flex-shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>

            {/* CTA strip */}
            <div className="mt-auto rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3"
              style={{ background: '#FFF3EC', border: '1px solid rgba(161,78,44,0.18)' }}>
              <div>
                <div className="font-bold text-desert-dark text-sm">Ready to roll in?</div>
                <div className="text-xs text-desert-dark/55 mt-0.5">Call us — we'll get you set up same day.</div>
              </div>
              <a href="tel:+19567637771"
                className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all hover:-translate-y-0.5"
                style={{ background: '#A14E2C', color: '#F5E9DA' }}>
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">(956) 763-7771</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>
          </div>

          {/* Right — Reserve form: NOT sticky on mobile */}
          <div>
            <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-8"
              style={{ background: '#FFFFFF', border: '1px solid rgba(161,78,44,0.1)', boxShadow: '0 8px 40px rgba(161,78,44,0.08)' }}>
              <h3 className="text-xl sm:text-2xl font-bold text-desert-dark mb-1">Reserve Your Spot</h3>
              <p className="text-desert-dark/50 text-xs sm:text-sm mb-5">Send your info and we'll call to confirm availability.</p>

              <div className="rounded-xl p-3 sm:p-3.5 mb-5" style={{ background: '#FFF3EC', border: '1px solid rgba(161,78,44,0.18)' }}>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-desert-burnt flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-desert-dark/70 leading-relaxed">
                    <span className="font-semibold text-desert-burnt">Cash or check only</span> — no credit cards.{' '}
                    <span className="font-semibold text-desert-burnt">No refunds</span> or prorating.
                    $100 refundable deposit on arrival.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Full Name',    type: 'text', placeholder: 'Your name' },
                  { label: 'Phone Number', type: 'tel',  placeholder: '(956) 000-0000' },
                ].map(({ label, type, placeholder }) => (
                  <div key={label}>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(60,30,10,0.45)' }}>{label}</label>
                    <input type={type} placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                      style={{ background: '#FDF6EE', border: '1px solid rgba(161,78,44,0.18)', color: '#3C1E0A' }} />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(60,30,10,0.45)' }}>Arrival Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                    style={{ background: '#FDF6EE', border: '1px solid rgba(161,78,44,0.18)', color: '#3C1E0A' }} />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(60,30,10,0.45)' }}>Stay Type</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                    style={{ background: '#FDF6EE', border: '1px solid rgba(161,78,44,0.18)', color: '#3C1E0A' }}>
                    <option value="">Select stay type</option>
                    <option>Monthly — $650</option>
                    <option>Weekly — $250</option>
                    <option>Daily — $50</option>
                  </select>
                </div>

                <a href="tel:+19567637771"
                  className="w-full inline-flex items-center justify-center gap-3 py-3.5 sm:py-4 rounded-xl font-bold text-base transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: '#A14E2C', color: '#F5E9DA' }}>
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Request a Callback
                </a>
              </div>

              <p className="text-center text-xs mt-4" style={{ color: 'rgba(60,30,10,0.3)' }}>
                We'll call you at the number provided to confirm your spot.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
