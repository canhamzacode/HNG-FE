import { AllProducts, Hero, TopPick } from '@/components';

export default function Home() {
  return (
    <div className="w-full ">
      <Hero />
      <TopPick />
      <AllProducts />
    </div>
  );
}
