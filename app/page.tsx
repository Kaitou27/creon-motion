import HeroSection from '../Components/HeroSection';
import WhoWeAreSection from '../Components/WhoWeAreSection';
import ServicesSection from '../Components/ServicesSection';
import WhyChooseUsSection from '../Components/WhyChooseUsSection';
import ClientStatsSection from '../Components/ClientStatsSection';
import ContactUsSection from '../Components/ContactUsSection';
import Faq from '../Components/Faq';
import Reels from '../Components/reels';
import PricingSection from '../Components/pricing/PricingSection';
import HowToOrderSection from '../Components/HowToOrderSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Reels />
      <WhoWeAreSection />
      <ClientStatsSection />
      <ServicesSection />
      <PricingSection />
      <HowToOrderSection />
      <WhyChooseUsSection />
      <Faq />
      <ContactUsSection />
    </>
  );
}
