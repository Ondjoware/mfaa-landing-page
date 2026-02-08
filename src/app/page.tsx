import ArticlesSection from "@/components/home/articles-section";
import CTASection from "@/components/home/cta-section";
import EventsSection from "@/components/home/events-section";
import GalleryCarousel from "@/components/home/gallery-carousel";
import HeroSection from "@/components/home/hero-section";
import Footer from "@/components/shared/footer";
import { Header } from "@/components/shared/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />
      <HeroSection />
      <GalleryCarousel />
      <ArticlesSection />
      <EventsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
