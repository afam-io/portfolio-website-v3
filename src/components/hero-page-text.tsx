'use client';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

export function HeroText() {
  const words = [
    {
      text: 'Afam',
      className: 'text-blue-500 dark:text-blue-500',
    },
    {
      text: 'Okoh',
      className: 'text-white',
    },
  ];

  return (
    <div className='flex h-[40 rem] w-auto flex-col items-center justify-center'>
      <p className='text-neutral-600 dark:text-neutral-200 text-xs sm:text-base '>
        My name is
      </p>
      <TypewriterEffectSmooth
        words={words}
        className='text-center'
        cursorClassName='mt-2'
      />
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4'>
        <button className='w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm'>
          Join now
        </button>
        <button className='w-40 h-10 rounded-xl bg-white text-black border border-black text-sm'>
          Signup
        </button>
      </div>
    </div>
  );
}
