import type { Metadata } from 'next';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { resourceArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Resources | WorkmanWise',
  description:
    'Lean and JIT informed resources for reducing manufacturing handoff friction.',
};

export default function ResourcesPage() {
  return (
    <section className="py-24 bg-bg">
      <Container>
        <SectionHeading
          headline="Practical resources for smoother handoffs."
          subtext="Short reads for teams improving flow without heavy overhauls."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resourceArticles.map((article, index) => (
            <AnimateOnScroll key={article.id} delay={index * 0.06} animation="fade-up">
              <ArticleCard article={article} />
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
