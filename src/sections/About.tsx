import { useState } from 'react';
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
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="reserve" className="relative overflow-hidden" style={{ background: '#FDF6EE', paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>

      <div className="mx-auto w-full relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* ── LEFT ── */}
          <div className="flex flex-col">
            <p className="font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 text-desert-burnt">About The Park</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-desert-dark mb-4 sm:mb-5 leading-tight">
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

            {/* Charges */}
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
              {policies.map(p => (
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

          {/* ── RIGHT — FORM ── */}
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

              {/* Success state */}
              {status === 'sent' ? (
                <div className="rounded-2xl p-6 text-center" style={{ background: '#F0FFF4', border: '1px solid #BBF7D0' }}>
                  <div className="text-3xl mb-3">✅</div>
                  <div className="font-bold text-desert-dark text-base mb-1">Request Sent!</div>
                  <p className="text-xs text-desert-dark/60 leading-relaxed">
                    We'll call you at the number provided to confirm your spot. Usually within the hour.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {/* Web3Forms config */}
                  <input type="hidden" name="access_key" value="e8e2b6cf-4dca-49ab-9bfb-62a78f632601" />
                  <input type="hidden" name="subject" value="New Reservation Request — Vaquero Village RV Park" />
                  <input type="hidden" name="from_name" value="Vaquero Village RV Park Website" />
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(60,30,10,0.45)' }}>Full Name *</label>
                    <input type="text" name="name" placeholder="Your name" required
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                      style={{ background: '#FDF6EE', border: '1px solid rgba(161,78,44,0.18)', color: '#3C1E0A', fontFamily: 'inherit' }} />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(60,30,10,0.45)' }}>Phone Number *</label>
                    <input type="tel" name="phone" placeholder="(956) 000-0000" required
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                      style={{ background: '#FDF6EE', border: '1px solid rgba(161,78,44,0.18)', color: '#3C1E0A', fontFamily: 'inherit' }} />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(60,30,10,0.45)' }}>Arrival Date</label>
                    <input type="date" name="arrival_date"
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                      style={{ background: '#FDF6EE', border: '1px solid rgba(161,78,44,0.18)', color: '#3C1E0A', fontFamily: 'inherit' }} />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(60,30,10,0.45)' }}>Stay Type</label>
                    <select name="stay_type"
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                      style={{ background: '#FDF6EE', border: '1px solid rgba(161,78,44,0.18)', color: '#3C1E0A', fontFamily: 'inherit' }}>
                      <option value="">Select stay type</option>
                      <option>Monthly — $650</option>
                      <option>Weekly — $250</option>
                      <option>Daily — $50</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(60,30,10,0.45)' }}>RV Size</label>
                    <select name="rv_size"
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                      style={{ background: '#FDF6EE', border: '1px solid rgba(161,78,44,0.18)', color: '#3C1E0A', fontFamily: 'inherit' }}>
                      <option value="">Select RV size</option>
                      <option>Small (under 25 ft)</option>
                      <option>Medium (25–35 ft)</option>
                      <option>Large (35–45 ft)</option>
                      <option>Extra Large (45 ft+)</option>
                      <option>Fifth Wheel</option>
                      <option>Travel Trailer</option>
                      <option>Motorhome Class A</option>
                      <option>Motorhome Class B / C</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(60,30,10,0.45)' }}>Additional Notes</label>
                    <textarea name="notes" rows={3} placeholder="Anything else we should know — number of people, pets, special requests..."
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                      style={{ background: '#FDF6EE', border: '1px solid rgba(161,78,44,0.18)', color: '#3C1E0A', fontFamily: 'inherit', resize: 'vertical' }} />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                    style={{
                      background: status === 'sending' ? '#C47A5A' : '#A14E2C',
                      color: '#F5E9DA',
                      border: 'none',
                      fontFamily: 'inherit',
                    }}
                  >
                    <Phone className="w-5 h-5" />
                    {status === 'sending' ? 'Sending...' : 'Request a Callback'}
                  </button>

                  {status === 'error' && (
                    <p className="text-xs text-red-600 text-center">
                      Something went wrong. Please call us directly at (956) 763-7771.
                    </p>
                  )}

                  <p className="text-center text-xs mt-1" style={{ color: 'rgba(60,30,10,0.3)' }}>
                    We'll call you at the number provided to confirm your spot.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
