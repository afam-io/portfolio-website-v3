import { SparklesCore } from '@/components/ui/sparkles';
import HeroPage from './home/page';
import SkillsPage from './skills/page';

export default function Home() {
  return (
    <div className='h-full bg-black flex flex-col items-center justify-center rounded-md'>
      <main className='flex flex-col'>
        <HeroPage />
        <SkillsPage />
      </main>
    </div>
  );
}
