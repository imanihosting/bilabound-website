import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import PricingCards from '@/components/home/PricingCards';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>BilaBound - No Limits, Just Growth</title>
        <meta
          name="description"
          content="Experience unlimited potential with BilaBound's powerful hosting solutions. Built for Africa's digital future."
        />
      </Head>

      <Hero />
      <Features />
      <PricingCards />
    </Layout>
  );
}