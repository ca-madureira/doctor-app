'use client';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
export default function FixedBookButton() {
  return (
    <div className="fixed bottom-0 bg-white z-50 w-full shadow-2xl py-8 px-6 rounded-md flex justify-between">
      <div className="max-w-4xl mx-auto"></div>
      <div className="w-full">
        <p className="text-xl font-bold">$56</p>
        <p className="font-semibold text-sm">Tue, Mar 12 - 8:00 AM GMT+3</p>
      </div>
      <Button
        variant="outline"
        className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold uppercase leading-5 text-white transition-all duration-200 bg-slate-900 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 hover:bg-blue-500 hover:text-slate-50"
      >
        <Plus className="w-5 h-5 mr-1" />
        Create Product
      </Button>
    </div>
  );
}
