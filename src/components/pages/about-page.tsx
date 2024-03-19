import Image from 'next/image';
const AboutPage = () => {
  return (
    <section className='bg-transparent h-screen w-screen p-5'>
      <h2 className='text-white text-4xl'> About Me</h2>
      <div className='m-w-[80%] m-h-[80%]'>
        <Image
          src='/images/afam-books-headshot.jpg'
          alt='headshot'
          width={600}
          height={397}
        />
      </div>
    </section>
  );
};

export default AboutPage;
