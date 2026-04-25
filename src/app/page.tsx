import { HeroSection } from "@/components/sections/HeroSection";
import { CartaSection } from "@/components/sections/CartaSection";
import { NosotrosSection } from "@/components/sections/NosotrosSection";
import { GaleriaSection } from "@/components/sections/GaleriaSection";
import { ContactoSection } from "@/components/sections/ContactoSection";
import { PedirSection } from "@/components/sections/PedirSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CartaSection />
      <NosotrosSection />
      <GaleriaSection />
      <ContactoSection />
      <PedirSection />
    </main>
  );
}