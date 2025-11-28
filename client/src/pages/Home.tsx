import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Fighter from '@/components/Fighter';
import Pillars from '@/components/Pillars';
import Partners from '@/components/Partners';
import MediaMerch from '@/components/MediaMerch';
import GetInvolved from '@/components/GetInvolved';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <Fighter />
        <Pillars />
        <Partners />
        <MediaMerch />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
}
