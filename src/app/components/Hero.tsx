// components/Hero.tsx
import Image from 'next/image';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center text-center">
      <Image
        src="/path-to-your-image.jpg" // Use your own image here
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full mb-4"
      />
      <h1 className="text-4xl md:text-6xl font-bold">Hello, I'm Laiba Parvez</h1>
      <p className="text-xl mt-2">A Passionate Web Developer</p>
      <a href="#contact" className="mt-6 px-8 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500">
        Get in Touch
      </a>
    </section>
  );
};

export default Hero;
