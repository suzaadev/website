import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Integrations from '@/components/Integrations';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Integrations />
      <Footer />
    </main>
  );
}

