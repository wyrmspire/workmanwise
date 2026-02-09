import { HeroSection } from '@/components/sections/HeroSection';
import { TranslationSection } from '@/components/sections/TranslationSection';
import { OutcomeSection } from '@/components/sections/OutcomeSection';
import { RoleSection } from '@/components/sections/RoleSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TranslationSection />
      <OutcomeSection />
      <RoleSection />
    </>
  );
}
