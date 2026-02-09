import type { Metadata } from 'next';
import { ToolsCatalog } from '@/components/tools/ToolsCatalog';

export const metadata: Metadata = {
  title: 'Tools & Services | WorkmanWise',
  description:
    'Focused tools for real work. Browse product families by family, role, or type.',
};

export default function ToolsPage() {
  return <ToolsCatalog />;
}
