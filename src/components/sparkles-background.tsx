'use client';
import React from 'react';
import { SparklesCore } from './ui/sparkles';

const SparklesBackground = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='h-full relative w-screen bg-black flex flex-col items-center justify-center overflow-hidden '>
      <div className='w-full absolute inset-0 h-screen'>
        <SparklesCore
          id='tsparticlesfullpage'
          background='transparent'
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className='w-full h-full'
          particleColor='#FFFFFF'
        />
      </div>
      {children}
    </div>
  );
};

export default SparklesBackground;
