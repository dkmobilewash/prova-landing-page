import { AiTrust } from "@/components/AiTrust";
import { Capabilities } from "@/components/Capabilities";
import { Compare } from "@/components/Compare";
import { EarlyAccess } from "@/components/EarlyAccess";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Honest } from "@/components/Honest";
import { Nav } from "@/components/Nav";
import { Problem } from "@/components/Problem";
import { Spine } from "@/components/Spine";
import { Union } from "@/components/Union";
import { Workflows } from "@/components/Workflows";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Spine />
        <Workflows />
        <Compare />
        <Union />
        <AiTrust />
        <Capabilities />
        <Honest />
        <Faq />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
}
