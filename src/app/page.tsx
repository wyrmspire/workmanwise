import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TranslationSection } from '@/components/sections/TranslationSection';
import { OutcomeSection } from '@/components/sections/OutcomeSection';
import { RoleSection } from '@/components/sections/RoleSection';
import { ProductSection } from '@/components/sections/ProductSection';
import { AIExplanationSection } from '@/components/sections/AIExplanationSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { CollectiveSection } from '@/components/sections/CollectiveSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { SITE_DESCRIPTION } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Home',
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TranslationSection />
      <OutcomeSection />
      <RoleSection />
      <ProductSection />
      <AIExplanationSection />
      <SocialProofSection />
      <CollectiveSection />
      <FinalCTASection />
    </>
  );
}
