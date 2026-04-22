import { Phone, MapPin, ArrowRight, Wifi, Droplets, Zap } from 'lucide-react';

export function Hero() {
  return (
    <>
      {/* Nav — mobile: icon only + compact call button */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-10 py-1.5 bg-desert-hero/90 backdrop-blur-md border-b border-desert-burnt/10">
        <a href="/" className="flex items-center gap-2 sm:gap-3">
          <img src="/logo.png" alt="Vaquero Village RV Park" className="h-12 w-12 sm:h-16 sm:w-16 object-contain" />
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-desert-dark leading-tight">Vaquero Village</div>
            <div className="text-xs text-desert-burnt leading-tight">R.V. Park · Laredo, TX</div>
          </div>
        </a>
        {/* Mobile: icon + short number. Desktop: full pill */}
        <a
          href="tel:+19567637771"
          className="inline-flex items-center gap-1.5 sm:gap-2 bg-desert-burnt hover:bg-desert-brown text-desert-sand rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-warm-lg px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden xs:inline sm:inline">(956) 763-7771</span>
          <span className="xs:hidden sm:hidden">Call</span>
        </a>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen bg-desert-hero flex items-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #3D1F0D 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-10 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left */}
            <div className="w-full min-w-0">
              <div className="inline-flex items-center gap-2 bg-desert-burnt/10 border border-desert-burnt/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-6">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-desert-burnt" />
                <span className="text-desert-burnt text-xs sm:text-sm font-medium">Laredo, TX — Hwy 83 North</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-desert-dark leading-tight mb-3 sm:mb-4">
                RV Park in<br />
                <span className="text-desert-burnt">Laredo, TX</span><br />
                Full Hookups Available
              </h1>

              <a href="tel:+19567637771" className="inline-flex items-center gap-2 text-desert-burnt font-bold text-lg sm:text-xl mb-5 sm:mb-6 hover:text-desert-brown transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                (956) 763-7771
              </a>

              <p className="text-base sm:text-lg text-desert-dark/70 mb-6 sm:mb-8 leading-relaxed max-w-full sm:max-w-lg">
                Full hookups, clean facilities, and honest rates — right off I-35.
                Truckers, travelers, and long-termers welcome.
              </p>

              {/* Trust badges — scroll on mobile */}
              <div className="flex flex-nowrap sm:flex-wrap gap-2 sm:gap-3 mb-7 sm:mb-10 overflow-x-auto pb-1 sm:pb-0">
                {[
                  { icon: Droplets, label: 'Water Included' },
                  { icon: Zap,      label: '30/50 Amps Available' },
                  { icon: Droplets, label: 'Sewage Included' },
                  { icon: Wifi,     label: 'Internet Available' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 bg-white/60 border border-desert-burnt/15 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-desert-burnt" />
                    <span className="text-xs sm:text-sm font-medium text-desert-dark whitespace-nowrap">{label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-7 sm:mb-10 w-full">
                <a href="tel:+19567637771" className="flex items-center justify-center gap-2 bg-desert-burnt hover:bg-desert-brown text-desert-sand w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-warm-lg transition-all duration-300 hover:-translate-y-0.5">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Now
                </a>
                <a href="#reserve" className="flex items-center justify-center gap-2 border-2 border-desert-burnt/40 text-desert-dark hover:bg-desert-burnt/5 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300">
                  Reserve Your Spot
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-4 sm:gap-5 text-xs sm:text-sm">
                <a href="https://share.google/MI9CRqTyQ80b8gyln" target="_blank" rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: 'rgba(245,233,218,0.75)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  View Google Listing →
                </a>
                <a href="https://www.facebook.com/vaquerovillage/" target="_blank" rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: 'rgba(245,233,218,0.75)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  Visit Facebook Page →
                </a>
              </div>
            </div>

            {/* Right — Pricing card: full width on mobile, right-aligned on desktop */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-desert-cream/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-warm-lg border border-white/60 w-full lg:max-w-sm">

                <div className="flex items-center gap-3 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-desert-burnt/10">
                  <img src="/logo.png" alt="Vaquero Village" className="h-11 w-11 sm:h-14 sm:w-14 object-contain" />
                  <div>
                    <div className="font-bold text-desert-dark text-sm sm:text-base leading-tight">Vaquero Village</div>
                    <div className="text-xs text-desert-burnt">R.V. Park · Laredo, TX</div>
                  </div>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-desert-dark mb-1">Simple, Clear Pricing</h2>
                <p className="text-desert-dark/55 text-xs mb-4 sm:mb-5">Water, electricity & sewer included for 2 people</p>

                {[
                  { period: 'Monthly', price: '$650', note: '30 or 50 amp' },
                  { period: 'Weekly',  price: '$250', note: '30 or 50 amp' },
                  { period: 'Daily',   price: '$50',  note: 'All RVs' },
                ].map(({ period, price, note }, i) => (
                  <div key={period} className={`flex items-center justify-between py-3 sm:py-4 ${i < 2 ? 'border-b border-desert-burnt/10' : ''}`}>
                    <div>
                      <div className="font-bold text-desert-dark text-sm">{period}</div>
                      <div className="text-xs text-desert-dark/45">{note}</div>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-desert-burnt">{price}</div>
                  </div>
                ))}

                <div className="mt-4 sm:mt-5 rounded-xl p-3 sm:p-3.5 text-xs text-desert-dark/65" style={{ background: 'rgba(161,78,44,0.08)' }}>
                  <span className="font-semibold text-desert-burnt">Cash or check only</span> — no credit cards.<br />
                  $100 refundable deposit required.
                </div>

                <a href="tel:+19567637771"
                  className="mt-3 sm:mt-4 flex items-center justify-center gap-2 w-full text-desert-sand py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: '#A14E2C' }}>
                  <Phone className="w-4 h-4" />
                  (956) 763-7771
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Wave → Features */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 60C360 20 1080 60 1440 20V60H0Z" fill="#1C0D05"/>
          </svg>
        </div>
      </section>
    </>
  );
}
