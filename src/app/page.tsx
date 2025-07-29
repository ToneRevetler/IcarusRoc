import WhoWeAreSection from "../../components/WhoWeAreSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import DevelopmentProcessSection from "../../components/DevelopmentProcess";
import FAQSection from "../../components/FAQ/FAQSection";
import TestimonialsSection from "../../components/Testimonials/TestimonialsSection";
import PricingCarousel from "../../components/PricingCarousel/PricingCarousel";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Home() {
  return (<>
    <HeroSection />
    <WhoWeAreSection />
    <DevelopmentProcessSection />
    <PricingCarousel />
    <TestimonialsSection />
    <ContactForm />
    <FAQSection />
  </>
  );
}
