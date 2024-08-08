import Layout from "@/components/Layout";
import Ssection from "@/app/crescoComponent/Ssection";
import TSection from "@/app/crescoComponent/TSection";
import Frthsection from "@/app/crescoComponent/Frthsection";
import FfthSection from "@/app/crescoComponent/FfthSection";
import Testimonial from "@/app/crescoComponent/Testimonial";
import CeoMessage from "./crescoComponent/CeoMessage";

import FSection from "@/app/crescoComponent/FSection";

export default function HomeTwo() {
  return (
    <>
      <Layout>
        <FSection />
        <Ssection />
        <FfthSection />
        <Frthsection />
        <Testimonial />
        <TSection />
        <CeoMessage />
      </Layout>
    </>
  );
}
