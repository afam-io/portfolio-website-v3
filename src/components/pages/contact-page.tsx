import Image from 'next/image';
import { GlobeDemo } from '../globe-comp';
const ContactPage = () => {
  return (
    <section className='bg-transparent h-screen w-screen p-5'>
      <h2 className='text-white text-4xl'> Contact Me</h2>
      <GlobeDemo />
    </section>
  );
};

export default ContactPage;
