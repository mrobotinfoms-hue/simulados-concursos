import { PageProps } from '@/types';

export default async function SimuladoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // resto do código...
}
