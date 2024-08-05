'use client';
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import Link from 'next/link';

export default function Availability() {
  const [bookDate, setBookDate] = useState<Date | undefined>(new Date());
  const GMT = bookDate?.toString().split('GMT')[1].split(' ')[0];
  const formattedDate = `${bookDate
    ?.toString()
    .split('')
    .slice(0, 3)
    .join('')} - GMT${GMT} `;
  const timeStamps = [
    {
      time: '8:30',
      period: 'am',
    },
    {
      time: '9:30',
      period: 'am',
    },
    {
      time: '10:00',
      period: 'am',
    },
  ];
  return (
    <div className="mb-[200px]">
      <h2 className="font-bold py-4 text-2xl uppercase text-slate-500 tracking-wider">
        Selecione a data e hora
      </h2>
      <div className="grid grid-cols-2 gap-4 lg:ga-0">
        <div className="sm:col-span-1 col-span-full"></div>
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            mode="single"
            selected={bookDate}
            onSelect={setBookDate}
            className="rounded-md border"
          />
        </div>
        <div className="sm:col-span-1 col-span-full">
          <div className="px-4">
            <h2 className="pb-4 text-blue-700 text-center py-3 px-4 border border-blue-500 ">
              {formattedDate}
            </h2>
            <div className="py-3 grid grid-cols-3 gap-2">
              {timeStamps.map((item, i) => {
                return (
                  <button key={i} className="bg-blue-600 text-white py-2 px-3">
                    {item.time}
                    {item.period}
                  </button>
                );
              })}
              <button className="text-[0.7rem] text-center bg-blue-900 text-white py-2 px-3">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
