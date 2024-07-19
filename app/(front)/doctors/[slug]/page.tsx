import Image from 'next/image';
import DoctorDetails from '@/components/Frontend/DoctorDetails';

export default function page() {
  return (
    <div className="bg-slate-50 py-24 min-h-screen ">
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-md rounded-md">
        <div className="py-6 px-8">
          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex flex-col">
                <div className="uppercase font-bold text-2xl tracking-widest">
                  <h2 className="uppercase font-bold text-2xl tracking-widest">
                    Vijal Patel
                  </h2>
                  <p className="text-gray-500 text-xs uppercase">
                    Adult Health
                  </p>

                  <p>In-person doctor visit</p>
                  <p>3504 Lincoln Highway, Kendall Park, NJ 08824</p>
                </div>
                <Image
                  src="/doctor.jpg"
                  width={243}
                  height={207}
                  alt=""
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <DoctorDetails />
        </div>
      </div>
    </div>
  );
}
