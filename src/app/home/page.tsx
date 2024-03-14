import { HeroText } from '@/components/hero-page-text';

const HeroPage = () => {
  return (
    <div className='bg-transparent hero h-screen w-screen'>
      <div className='hero-content'>
        <HeroText />
      </div>
    </div>
  );
};

export default HeroPage;
