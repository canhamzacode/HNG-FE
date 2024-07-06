import { AllProducts, Hero, TopPick } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full ">
      <Hero />
      <TopPick />
      <AllProducts />
    </div>
  );
}
