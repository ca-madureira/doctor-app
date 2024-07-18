import Link from 'next/link';
import Image from 'next/image';
import { ServiceProps } from '@/types/types';

export default function ServiceCard({ service }: { service: ServiceProps }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="rounded-md bg-slate-400 hover:bg-slate-500 duration-300 flex gap-4 overflow-hidden"
    >
      <Image
        src="/doctor.jpg"
        width={1170}
        height={848}
        alt="title"
        className="w-1/3 object-cover aspect-video"
      />
      <div className="flex flex-col w-2/3 py-4">
        <h2>{service.title}</h2>
        <p className="text-[0.6rem]">936 Doctors Available</p>
      </div>
    </Link>
  );
}
