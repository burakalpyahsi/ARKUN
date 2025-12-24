import { HeroComparison } from '@/components/sections/HeroComparison';
import { ValueEvidenceStrip } from '@/components/sections/ValueEvidenceStrip';
import { CoreDefenseGrid } from '@/components/sections/CoreDefenseGrid';
import { Features } from '@/components/sections/Features';
import { Modules } from '@/components/sections/Modules';
import { Pricing } from '@/components/sections/Pricing';
import { Contact } from '@/components/sections/Contact';

// Context & Overlay
import { DeepDiveProvider } from '@/context/DeepDiveContext';
import { DeepDiveDrawer } from '@/components/ui/DeepDiveDrawer';

export default function Home() {
  return (
    <DeepDiveProvider>
      <div className="flex flex-col">
        <DeepDiveDrawer /> {/* Global Overlay */}

        <HeroComparison />
        <ValueEvidenceStrip />
        <CoreDefenseGrid />

        <Features />
        <Modules />
        <Pricing />
        <Contact />
      </div>
    </DeepDiveProvider>
  );
}
