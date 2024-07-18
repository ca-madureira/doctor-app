'use client';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import ServiceList from './Services/ServiceList';
import { X, Stethoscope, Microscope, Syringe } from 'lucide-react';
import LinkCards from './Doctors/LinkCards';

export default function TabbedItems() {
  const services = [
    {
      title: 'Telehealth',
      image: '/doctor.jpg',
      slug: 'telehealth',
    },
    {
      title: 'Video prescription',
      image: '/doctor.jpg',
      slug: 'telehealth',
    },
    {
      title: 'urgent care',
      image: '/',
      slug: '',
    },
  ];
  const tabs = [
    {
      title: 'Popular services',
      icon: Stethoscope,
      component: <ServiceList data={services} />,
      content: [],
    },
    {
      title: 'Specialists',
      icon: Microscope,
      component: <LinkCards className="bg-purple-950" />,
      content: [],
    },
    {
      title: 'Symptoms',
      icon: Syringe,
      component: <LinkCards className="bg-purple-950" />,
      content: [],
    },
  ];
  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      {tabs.map((tab, i) => {
        return (
          <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
            {tab.component}
          </Tabs.Item>
        );
      })}
    </Tabs>
  );
}
