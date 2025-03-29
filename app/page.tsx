import Counts from "@/components/counts";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="w-screen">
      <Navbar />
      <Hero />
      <Services />
      <Counts />
      <Testimonials />
    </div>
  );
}
