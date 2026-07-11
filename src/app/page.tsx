import Hero from "@/component/HeroSection";
import MeetOurFounder from "@/component/Founder";
import MissionVisionValues from "@/component/MissionAndVision";
import OrganizationalOverview from "@/component/OrganizationOverview";
import GetInTouch from "@/component/Contuct";
import Footer from "@/component/Footer";
import SuccessBaner from "@/component/SuccessBaner";


export default async function Home() {

  return (
    <div>
      <Hero />
      <MeetOurFounder />
      <SuccessBaner />
      <MissionVisionValues />
      <OrganizationalOverview />
      <GetInTouch />
      <Footer />
    </div>
  );
}
