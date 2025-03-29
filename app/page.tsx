import About from "@/components/about";
import Counts from "@/components/counts";
import Footer from "@/components/footer";
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
      <About />
      <Footer />
    </div>
  );
}
