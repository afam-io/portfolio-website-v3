'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SkillData } from '../../../constants';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

const SkillsPage = () => {
  return (
    <section className='bg-transparent h-screen w-screen p-5 '>
      <h2 className='text-white text-4xl'> Skills</h2>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        className='max-w-[80%]'>
        {SkillData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={5000}
        modules={[Autoplay]}
        className='max-w-[80%]'>
        {SkillData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      Swi
    </section>
  );
};

export default SkillsPage;
