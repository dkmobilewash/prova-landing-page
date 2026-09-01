import { Compare } from "@/components/Compare";
import { EarlyAccess } from "@/components/EarlyAccess";
import { Everything } from "@/components/Everything";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Honest } from "@/components/Honest";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { Problems } from "@/components/Problems";
import { Spine } from "@/components/Spine";
import { Worth } from "@/components/Worth";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Problems />
        <Spine />
        <Worth />
        <Pricing />
        <Compare />
        <Everything />
        <Honest />
        <Faq />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
}
