import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

const Projects = () => {
  return (
    <div id="projects">
      <div className=" mx-auto p-4 bg-[rgb(45,45,45)]">
        <div className="grid col-span-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-950 p-4 rounded-lg shadow-lg">
            <Image
              src={'/project.jpg'}
              alt="Project 1"
              width={500} 
              height={500}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2
              className={`${caveat.className} text-xl font-semibold mt-4 text-white`}
            >
              Project 1
            </h2>

            <p className={`${caveat.className} mt-2 text-gray-600`}>
              I created this Static Resume Builder using HTML, CSS, and
              TypeScript to help users generate a professional-looking resume
              with ease. This project was designed to be lightweight,
              interactive, and visually appealing. The goal was to allow users
              to input their personal and professional information, and
              dynamically display it in a structured, well-designed format.
            </p>
            <a
              href="https://hackathon-milestone-1-and-2-made-by-laibaparvez.vercel.app/"
              className={`${caveat.className} text-blue-500 mt-4 inline-block`}
            >
              View Project
            </a>
          </div>

          <div className="bg-gray-950 p-4 rounded-lg shadow-lg">
            <Image
              src={'/project.jpg'}
              width={500}
              height={500}
              alt="Project 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2
              className={`${caveat.className} text-xl font-semibold mt-4 text-white`}
            >
              Project 2
            </h2>
            <p className={`${caveat.className} mt-2 text-gray-600`}>
              I developed this Dynamic Resume Builder using HTML, CSS, and
              TypeScript to allow users to create personalized, editable
              resumes. This project empowers users to dynamically generate
              resumes by filling out various sections and immediately seeing a
              live preview of their resume with a professional layout.
            </p>
            <a
              href="https://hackathon-milestone-3-4-and-5-by-laibaparvez.vercel.app/"
              className={`${caveat.className} text-blue-500 mt-4 inline-block`}
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;



