'use client';
import React from 'react';
import { SparklesCore } from './ui/sparkles';

const SparklesBackground = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden '>
      <div className='w-full absolute inset-0 max-h-full'>
        <SparklesCore
          id='tsparticlesfullpage'
          background='transparent'
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className='w-full h-full'
          particleColor='#FFFFFF'
        />
      </div>
      {children}
    </div>
  );
};

export default SparklesBackground;
