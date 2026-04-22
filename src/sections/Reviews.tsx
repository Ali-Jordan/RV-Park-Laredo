import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Cody Bennett',
    tag: 'Google Review · 5 months ago',
    stars: 5,
    text: "Mr Juan is amazing. He will meet you in the front when you arrive and escort you to your spot. He will take care of any problems promptly. I've been staying here for almost 4 years now and I have never had an issue staying here.",
  },
  {
    name: 'Brad Roberts',
    tag: 'Google Review · 1 year ago',
    stars: 5,
    text: "Great for long term living from your RV! Reasonably priced monthly rent. Quiet and respectful neighbors. The owners run the park perfectly year in and year out with the upmost professional and friendly care. Safety has never been a concern. We love living and camping here!",
  },
  {
    name: 'Pamela Branch',
    tag: 'Google Review · 5 years ago',
    stars: 5,
    text: "Enjoyed my stay. Very quiet and peaceful. Very friendly staff. I would recommend and will be back next time I am in town. Has laundry and shower house.",
  },
];

export function Reviews() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#7A2E0E', paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="text-center mb-10 sm:mb-12">
          <p className="font-medium tracking-widest uppercase text-xs sm:text-sm mb-3" style={{ color: 'rgba(245,233,218,0.55)' }}>Guest Reviews</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6" style={{ color: '#F5E9DA' }}>What People Are Saying</h2>
          <div className="inline-flex flex-col items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-7 sm:h-7" style={{ fill: '#F5E9DA', color: '#F5E9DA' }} />
              ))}
              <Star className="w-5 h-5 sm:w-7 sm:h-7" style={{ fill: 'rgba(245,233,218,0.3)', color: '#F5E9DA' }} />
            </div>
            <span className="text-xs sm:text-sm font-semibold" style={{ color: 'rgba(245,233,218,0.6)' }}>4.3 · 88 Google Reviews</span>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reviews.map(({ name, tag, stars, text }) => (
            <div key={name} className="rounded-2xl p-5 sm:p-7 flex flex-col"
              style={{ background: 'rgba(245,233,218,0.1)', border: '1px solid rgba(245,233,218,0.18)' }}>
              <div style={{ width: '32px', height: '3px', background: 'rgba(245,233,218,0.4)', borderRadius: '2px', marginBottom: '14px' }} />
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'rgba(245,233,218,0.85)' }}>{text}</p>
              <div className="flex gap-1 mb-2">
                {[...Array(stars)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ fill: '#F5E9DA', color: '#F5E9DA' }} />
                ))}
              </div>
              <div className="font-bold text-sm" style={{ color: '#F5E9DA' }}>{name}</div>
              <div className="text-xs mt-0.5" style={{ color: 'rgba(245,233,218,0.45)' }}>{tag}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <a href="https://share.google/MI9CRqTyQ80b8gyln" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: '#F5E9DA', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Read all 88 reviews on Google →
          </a>
        </div>

      </div>

      {/* Wave → About */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ marginBottom: '-1px' }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 20C480 60 960 20 1440 60V60H0Z" fill="#FDF6EE"/>
        </svg>
      </div>
    </section>
  );
}
