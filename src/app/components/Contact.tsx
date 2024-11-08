import { PiContactlessPaymentFill } from "react-icons/pi";
import { FaLinkedin, FaGithub, FaNpm } from "react-icons/fa";

import { Caveat } from "next/font/google";
const caveat = Caveat({ subsets: ["latin"] });

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-950 text-center">
      <div className="container mx-auto">
        <h2
          className={`${caveat.className} text-3xl font-semibold mb-4 text-white underline`}
        >
          Contact Me <PiContactlessPaymentFill className={"inline"} />
        </h2>
        <p className={`${caveat.className} text-lg text-gray-500 mb-6`}>
          Feel free to reach out if you'd like to collaborate or just want to
          chat!
        </p>
        <a
          href="mailto:pervezlaib20@gmail.com"
          className={`${caveat.className} px-8 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500`}
        >
          Send an Email
        </a>

        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/laiba-parvez-9b205b2b4/"
            target="_blank"
            className="text-3xl text-blue-600 hover:text-blue-500"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/whoizlaiba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-900 hover:text-gray-700"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.npmjs.com/~laibaparvez?activeTab=orgs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-orange-500 hover:text-orange-400"
          >
            <FaNpm />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
