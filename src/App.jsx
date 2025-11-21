import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Careers from "./pages/Careers";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Accessibility from "./pages/Accessibility";
import ScrollToTop from "./components/ScrollToTop";
import Jobs from "./pages/Jobs";
import WhyWorkInCare from "./pages/WhyworkInCare";
import HowWeCare from "./pages/HowWeCare";
import HomeCare from "./pages/HomeCare";
import DisabilitySupport from "./pages/DisabilitySupport";
import CompanionshipCare from "./pages/CompanionshipCare";
import RespiteCare from "./pages/RespiteCare";
import WhatsAppSupport from "./pages/WhatsAppSupport";
import FAQ from "./pages/FAQ";
import Complaints from "./pages/Complaints";
import Safeguarding from "./pages/Safeguarding";
import CookiePolicy from "./pages/Cookie/CookiePolicy";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main className="pt-24 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/home-care" element={<HomeCare />} />
          <Route path="/disability-support" element={<DisabilitySupport />} />
          <Route path="/companionship" element={<CompanionshipCare/>}/>
          <Route path="/respite" element={<RespiteCare/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/complaints" element= {<Complaints/>}/>
          <Route path="/safeguarding" element={<Safeguarding/>}/>
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/why-work-in-care" element={<WhyWorkInCare />} />
          <Route path="how-we-care" element={<HowWeCare />} />
            <Route path="/cookie-policy" element={<CookiePolicy/>} />
        </Routes>
      </main>
      <Footer />
      {/* <WhatsAppSupport/> */}
    </BrowserRouter>
  );
}
