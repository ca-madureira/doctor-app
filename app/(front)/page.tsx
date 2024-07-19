import React from 'react';
import Hero from '@/components/Frontend/Hero';
import MegaMenu from '@/components/Frontend/MegaMenu';
import Brands from '@/components/Frontend/Brands';
import TabbedSection from '@/components/Frontend/TabbedSection';
import DoctorsList from '@/components/Frontend/DoctorsList';
export default function Home() {
  return (
    <section className="">
      <Hero />
      <Brands />
      <TabbedSection />
      <DoctorsList />
      <DoctorsList
        className="bg-white py-8 lg:py-24"
        title="In-person doctor visit"
        isInPerson={true}
      />
    </section>
  );
}
