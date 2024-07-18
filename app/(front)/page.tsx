import React from 'react';
import Hero from '@/components/Frontend/Hero';
import MegaMenu from '@/components/Frontend/MegaMenu';
import Brands from '@/components/Frontend/Brands';
import TabbedSection from '@/components/Frontend/TabbedSection';
export default function Home() {
  return (
    <section className="">
      <Hero />
      <Brands />
      <TabbedSection />
    </section>
  );
}
