import { Zap, ShowerHead, PawPrint, Car, Wifi, Package, Truck, Navigation, Home, DollarSign } from 'lucide-react';

const amenities = [
  { icon: Zap,        title: 'Full Hookups',       desc: '30 and 50 amp electric service with water and sewer at every site.' },
  { icon: Car,        title: 'Concrete Slabs',     desc: 'Large, level concrete slabs — no mud, no hassle, easy pull-through.' },
  { icon: ShowerHead, title: 'Large Showers',      desc: 'Clean, spacious shower facilities on the property.' },
  { icon: Package,    title: 'Laundry Room',       desc: 'On-site laundry room available for all guests.' },
  { icon: PawPrint,   title: 'Pet Friendly',       desc: 'Pets welcome with proof of vaccinations. Quiet, clean property.' },
  { icon: Wifi,       title: 'Internet Available', desc: '$55/month + tax. No contract. $100 refundable equipment deposit.' },
];

const whoFor = [
  { icon: Truck,      label: 'Workers & Contractors', desc: 'Close to I-35 and major job sites around Laredo.' },
  { icon: Navigation, label: 'I-35 Travelers',        desc: 'Perfect overnight or short-term stop on your route.' },
  { icon: Home,       label: 'Long-Term Residents',   desc: 'Monthly rates with everything included — stable and affordable.' },
  { icon: DollarSign, label: 'Best Rates in Laredo',  desc: 'The most competitive rates for full hookup RV parking in Laredo.' },
];

export function Features() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#1C0D05', paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(3rem, 6vw, 4rem)' }}>

      {/* Orange cactus — small corner accent, desktop only, no tilt */}
      <img
        src="/dessert_cactus.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 pointer-events-none select-none hidden lg:block"
        style={{
          width: '220px',
          height: 'auto',
          objectFit: 'contain',
          objectPosition: 'bottom left',
          transform: 'translateX(-30%) translateY(20%)',
          opacity: 0.3,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="text-center mb-10 sm:mb-12">
          <p className="font-medium tracking-widest uppercase text-xs sm:text-sm mb-3" style={{ color: '#E8A06A' }}>On-Site Amenities</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#F5E9DA' }}>Everything You Need</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(245,233,218,0.68)' }}>
            Full-service RV park — clean, quiet, and equipped for any length of stay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mb-10 sm:mb-16">
          {amenities.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,233,218,0.07)' }}>
              <div className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'rgba(196,98,42,0.22)' }}>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#E8A06A' }} />
              </div>
              <h3 className="text-sm font-semibold mb-1.5" style={{ color: '#F5E9DA' }}>{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,233,218,0.68)' }}>{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <p className="font-medium tracking-widest uppercase text-xs sm:text-sm mb-3" style={{ color: '#E8A06A' }}>Who Stays With Us</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#F5E9DA' }}>Built for People on the Move</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {whoFor.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-4 sm:gap-5 rounded-2xl px-4 sm:px-6 py-4 sm:py-5"
              style={{ background: 'rgba(196,98,42,0.1)', border: '1px solid rgba(196,98,42,0.2)' }}>
              <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl"
                style={{ background: 'rgba(196,98,42,0.25)' }}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#E8A06A' }} />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm mb-0.5" style={{ color: '#F5E9DA' }}>{label}</div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,233,218,0.68)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Wave → Reviews */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ marginBottom: '-1px' }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 60C480 20 960 60 1440 20V60H0Z" fill="#7A2E0E"/>
        </svg>
      </div>
    </section>
  );
}
