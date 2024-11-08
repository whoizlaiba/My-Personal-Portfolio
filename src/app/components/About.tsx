import { Caveat } from "next/font/google";
const caveat = Caveat({ subsets: ["latin"] });
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 text-center">
      <div className="container mx-auto">
        <h2
          className={`${caveat.className} text-3xl font-semibold text-white mb-4 underline`}
        >
          About Me
        </h2>
        <p
          className={`${caveat.className} text-xl font-semibold  mb-4 text-gray-500 `}
        >
          Hello! I'm a beginner front-end developer passionate about crafting
          clean, user-friendly web interfaces. I'm currently diving into the
          basics of web design with technologies like HTML, CSS, TypeScript,
          Next.js, Tailwind Css and React. I’m focused on building visually
          appealing and responsive websites, constantly exploring new tools and
          techniques to improve my skills. Excited to continue learning and
          growing in the world of front-end development!
        </p>
      </div>
    </section>
  );
};

export default About;
