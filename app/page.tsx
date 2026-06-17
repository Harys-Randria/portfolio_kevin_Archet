import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Expertise } from '@/components/expertise';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { Projects } from '@/components/projects';
import { Footer } from '@/components/footer';
import { ContactCTA } from '@/components/calendly-section';
import { About } from '@/components/about';

export default function Home() {
  return (
    <main className="bg-surface-main">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <ExperienceTimeline />
      <Projects />
      <ContactCTA />
      <Footer />
    </main>
  );
}