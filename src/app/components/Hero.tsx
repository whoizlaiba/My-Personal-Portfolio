import Image from "next/image";
import { FC } from "react";
import { Caveat } from "next/font/google";
// import image from "/canva.jpg";

const caveat = Caveat({ subsets: ["latin"] });

const Hero: FC = () => { 
  return (
    <section className="bg-[rgb(45,45,45)] text-white h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
      <div className="col-span-1 flex justify-center mb-12 md:mb-0 lg:col-span-1">
        <Image
          src={'/canva.jpg'}
          alt="Profile Picture"
          width={400}
          height={400}
          className="rounded-3xl object-cover border-4"
        />
      </div>

      <div className="col-span-1 md:col-span-1 flex flex-col justify-center items-center md:items-start text-center md:text-left lg:col-span-2">
        <h1
          className={`${caveat.className} text-4xl sm:text-6xl font-bold md:text-4xl lg:px-16 md:px-10  `}
        >
          Hello, <br /> I’m Laiba Parvez
        </h1>

        <span
          className={`${caveat.className} text-2xl    md:px-10 lg:px-16  md:flex gap-1`}
        >
          <h2>A Passionate</h2>
          <h2>Frontend Developer</h2>
        </span>
        <div className="md:lnline">
          <p className={`${caveat.className} md:text-base md:px-10  lg:px-16`}>
            Welcome to my portfolio! I specialize in building dynamic,
            responsive websites using modern <br />
            web technologies like Next.js, HTML, CSS, Tailwind CSS, and
            TypeScript. With a focus on clean <br />
            code and seamless user experiences, I create websites that are not
            only visually appealing but <br />
            also highly functional. Explore my work to see how I combine
            creativity and technical expertise <br />
            to bring ideas to life online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
