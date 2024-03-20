import Image from 'next/image';
import { BentoGridThirdDemo } from '../grid';
const ProjectsPage = () => {
  return (
    <section className='bg-transparent h-screen w-screen p-5'>
      <h2 className='text-white text-4xl'> Projects</h2>
      <BentoGridThirdDemo />
    </section>
  );
};

export default ProjectsPage;
