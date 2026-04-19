import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Reviews } from './sections/Reviews';
import { About } from './sections/About';
import { Footer } from './sections/Footer';

function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Reviews />
      <About />
      <Footer />
    </main>
  );
}

export default App;
