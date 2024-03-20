import { SparklesCore } from '@/components/ui/sparkles';
import HeroPage from './home/page';
import SkillsPage from '../components/pages/skills-page';
import AboutPage from '@/components/pages/about-page';
import ProjectsPage from '@/components/pages/projects-page';
import ContactPage from '@/components/pages/contact-page';

export default function Home() {
  return (
    <div className='h-full w-full bg-black flex flex-col items-center justify-center bg-transparent rounded-md '>
      <main className='flex flex-col bg-transparent'>
        <HeroPage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
      </main>
    </div>
  );
}
