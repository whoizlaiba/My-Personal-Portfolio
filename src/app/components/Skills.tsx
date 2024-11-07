// components/Skills.tsx
const Skills = () => {
    return (
      <section id="skills" className="py-20 bg-gray-800 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold">JavaScript</h3>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold">Next.js</h3>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold">Tailwind CSS</h3>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold">TypeScript</h3>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  