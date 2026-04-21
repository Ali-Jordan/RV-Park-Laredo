import { MapPin, Phone, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#1A0A03' }}>

      {/* Night gold cactus — right side, desktop only */}
      <img
        src="/dessert_night.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 pointer-events-none select-none hidden lg:block"
        style={{
          height: '90%',
          width: 'auto',
          objectFit: 'contain',
          objectPosition: 'bottom right',
          transform: 'translateX(10%) translateY(10%)',
          opacity: 0.22,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-6 sm:pb-10">

        {/* Sideview brand — constrained on mobile */}
        <div className="mb-5 sm:mb-6 pb-5 sm:pb-6" style={{ borderBottom: '1px solid rgba(245,233,218,0.07)' }}>
          <img
            src="/sideview.png"
            alt="Vaquero Village RV Park"
            style={{ height: 'clamp(80px, 15vw, 156px)', maxWidth: '520px', objectFit: 'contain', objectPosition: 'left' }}
          />
          <p className="mt-1.5 text-xs tracking-widest uppercase" style={{ color: 'rgba(245,233,218,0.55)' }}>
            Village R.V. Park &nbsp;·&nbsp; Laredo, TX
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-10">

          <div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,233,218,0.5)', maxWidth: '240px' }}>
              Full hookup RV parking on Hwy 83 North near I-35.
              Daily, weekly, and monthly rates available.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 sm:mb-5 uppercase tracking-wider text-xs" style={{ color: '#F5E9DA' }}>Contact</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3" style={{ color: 'rgba(245,233,218,0.55)' }}>
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">16594 Hwy 83 North<br />Laredo, TX 78045</div>
              </div>
              <div className="flex items-center gap-3" style={{ color: 'rgba(245,233,218,0.55)' }}>
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+19567637771" className="text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(245,233,218,0.55)' }}>(956) 763-7771</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 sm:mb-5 uppercase tracking-wider text-xs" style={{ color: '#F5E9DA' }}>Find Us Online</h4>
            <div className="space-y-2.5 sm:space-y-3">
              {[
                { label: 'Google Listing',                  href: 'https://share.google/MI9CRqTyQ80b8gyln' },
                { label: 'Facebook Page',                   href: 'https://www.facebook.com/vaquerovillage/' },
                { label: 'Listed on Roamze (RV Directory)', href: 'https://roamze.com/activities/vaquero-village-rv-park-osm-node-8175251829' },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(245,233,218,0.55)' }}>
                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8" style={{ borderTop: '1px solid rgba(245,233,218,0.07)' }}>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center sm:gap-4 text-center sm:text-left">
            <p className="text-xs" style={{ color: 'rgba(245,233,218,0.25)' }}>
              &copy; {new Date().getFullYear()} Vaquero Village RV Park. All rights reserved.
            </p>
            <p className="text-xs text-center sm:text-right" style={{ color: 'rgba(245,233,218,0.25)' }}>
              RV Park in Laredo TX &middot; RV Parking Near I-35 &middot; Monthly RV Sites Laredo
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
