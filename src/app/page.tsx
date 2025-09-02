import Hero from '@/components/sections/Hero';
import ScentProfiler from '@/components/sections/ScentProfiler';
import ProductCatalog from '@/components/sections/ProductCatalog';
import BusinessOpportunity from '@/components/sections/BusinessOpportunity';
import Offers from '@/components/sections/Offers';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <main className="flex-grow">
        <Hero />
        
        <ProductCatalog />
        <BusinessOpportunity />
        <Offers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
