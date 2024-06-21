// pages/regions.tsx
import Link from 'next/link';

const regions = [
  { name: 'Africa', src: './africa.svg', path: '/africa' },
  { name: 'Asia', src: './asia.svg', path: '/asia' },
  { name: 'Europe', src: './europe.svg', path: '/europe' },
  { name: 'Latin America', src: './south-america.svg', path: '/latin-america' },
  { name: 'Middle East and North Africa', src: './middle-east.svg', path: '/middle-east-north-africa' },
  { name: 'CIS', src: './cis.svg', path: '/cis' },
  { name: 'Global', src: './global.svg', path: '/global' },
];

const RegionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-10  ">
      <h1 className="text-4xl font-bold mb-8">Regions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-auto gap-8">
        {regions.map((region) => (
          <Link key={region.name} href={region.path} passHref>
            <div className="flex flex-col items-center justify-center p-4 rounded border-gray-200 hover:border-blue-300  shadow  hover:bg-blue-50 transition cursor-pointer">
              <div className=" mb-4 flex items-center justify-center">
                <img src={region.src} alt={region.name} className="object-cover w-full h-full rounded" />
              </div>
              <span className="text-lg font-semibold">{region.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RegionsPage;
