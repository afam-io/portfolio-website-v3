import { SparklesCore } from '@/components/ui/sparkles';
import HeroPage from './home/page';
import SkillsPage from './skills/page';
import HPage from './home/page';

export default function Home() {
  return (
    <div className='h-full w-full bg-black flex flex-col items-center justify-center bg-transparent rounded-md '>
      <main className='flex flex-col bg-transparent'>
        <HPage />
        {/* <SkillsPage /> */}
      </main>
    </div>
  );
}
