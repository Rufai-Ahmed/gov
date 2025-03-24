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
      <Hero />
      <Better />
      <GetStarted />
      <Transform />
      <JoinWepay />
      <AboutWepay />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Page;
