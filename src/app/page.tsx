import { HeroSection } from "@/components/sections/HeroSection";
import { CartaSection } from "@/components/sections/CartaSection";
import { NosotrosSection } from "@/components/sections/NosotrosSection";
import { GaleriaSection } from "@/components/sections/GaleriaSection";
import { ContactoSection } from "@/components/sections/ContactoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CartaSection />
      <NosotrosSection />
      <GaleriaSection />
      <ContactoSection />
    </main>
  );
}