import { Hero } from "@/components/sections/Hero";
import { WhatIsLfx } from "@/components/sections/WhatIsLfx";
import { Traction } from "@/components/sections/Traction";
import { PersonaBenefits } from "@/components/sections/PersonaBenefits";
import { Resources } from "@/components/sections/Resources";
import { WallOfLove } from "@/components/sections/WallOfLove";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsLfx />
      <Traction />
      <PersonaBenefits />
      <WallOfLove />
      <CtaBanner />
      <Resources />
    </>
  );
}
