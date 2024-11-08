import { Caveat } from "next/font/google";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";

const caveat = Caveat({ subsets: ["latin"] });
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-[rgb(45,45,45)] text-white text-center"
    >
      <div className="container mx-auto">
        <h2
          className={`${caveat.className} text-3xl font-semibold mb-6 underline `}
        >
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="p-6 bg-gray-950 rounded-lg border-4 ">
            <h3 className={`  ${caveat.className} text-xl font-semibold`}>
              Next.js <RiNextjsLine className="inline" />
            </h3>
          </div>
          <div className="p-6 bg-gray-950 rounded-lg border-4">
            <h3 className={`${caveat.className} text-xl font-semibold inline`}>
              Tailwind Css <RiTailwindCssFill className="inline" />
            </h3>
          </div>
          <div className="p-6 bg-gray-950  rounded-lg border-4">
            <h3 className={`  ${caveat.className} text-xl font-semibold`}>
              TypeScript <TbBrandTypescript className="inline" />
            </h3>
          </div>
          <div className="p-6 bg-gray-950 rounded-lg border-4">
            <h3 className={`  ${caveat.className} text-xl font-semibold`}>
              Html <AiOutlineHtml5 className="inline" />
            </h3>
          </div>
          <div className="md:col-span-4 md:w-1/4 md:m-auto ">
            <div className="p-6 bg-gray-950 rounded-lg border-4 ">
              <h3 className={`  ${caveat.className} text-xl font-semibold `}>
                Css <FaCss3Alt className="inline" />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
