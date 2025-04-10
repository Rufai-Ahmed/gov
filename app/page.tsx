import FAQSection from "@/components/faq/faq-section";
import ChatWithUs from "@/components/icons/chat-with-us";
import AboutWepay from "@/components/sections/about/AboutWepay";
import Better from "@/components/sections/better/better";
import Footer from "@/components/sections/footer/Footer";
import GetInTouch from "@/components/sections/get-in-touch/GetInTouch";
import GetStarted from "@/components/sections/get-started/get-started";
import Hero from "@/components/sections/hero/hero";
import JoinWepay from "@/components/sections/joinWepay/JoinWepay";
import Transform from "@/components/sections/transform/transform";

const Page = () => {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>
      <div id="products">
        <Better />
      </div>
      <div id="get-started">
        <GetStarted />
      </div>
      <div id="transform">
        <Transform />
      </div>
      <div id="join">
        <JoinWepay />
      </div>
      <div id="about-us">
        <AboutWepay />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <GetInTouch />
      </div>
      <Footer />
      <ChatWithUs />
    </div>
  );
};

export default Page;
