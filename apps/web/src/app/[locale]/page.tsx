import type { Metadata } from 'next';
import { TranslationProvider } from '@/lib/i18n';
import { getCanonicalUrl, BASE_URL } from '@/lib/seo/hreflang';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Phygital from '@/components/Phygital';
import Steps from '@/components/Steps';
import RealPeople from '@/components/RealPeople';
import Sectors from '@/components/Sectors';
import Branding from '@/components/Branding';
import ProvenResults from '@/components/ProvenResults';
import SaubhOS from '@/components/SaubhOS';
import Learning from '@/components/Learning';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Community from '@/components/Community';
import Pricing from '@/components/Pricing';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale.split('-')[0]; // e.g. 'hi-in' → 'hi'
  const url = getCanonicalUrl(locale, '');

  return {
    title: `Saubh.Tech — ${locale}`,
    description:
      'Connect with verified individuals and businesses worldwide for secure gig work, UGC content creation, and digital branding.',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `Saubh.Tech — Phygital Gig Marketplace`,
      description:
        'Connect with verified individuals and businesses worldwide for secure gig work payments.',
      url,
      siteName: 'Saubh.Tech',
      type: 'website',
      locale: lang,
    },
  };
}

export default function Home() {
  return (
    <TranslationProvider>
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <Phygital />
      <Steps />
      <RealPeople />
      <Sectors />
      <Branding />
      <ProvenResults />
      <SaubhOS />
      <Learning />
      <Blog />
      <FAQ />
      <Community />
      <Pricing />
      <Newsletter />
      <Footer />
    </TranslationProvider>
  );
}
