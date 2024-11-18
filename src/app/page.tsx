import { Hero } from "@/components/Hero";
import { Hotels } from "@/components/Hotels";
import { Testmonial } from "@/components/Testmonial";
import { Tours } from "@/components/Tours";


export default function Home() {
  return (
    <main>
      
      <Hero />
      <Tours />
      <Hotels />
      <Testmonial />
    </main>
  );
}
