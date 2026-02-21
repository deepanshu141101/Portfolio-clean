export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 pt-28">
      <h2 className="text-3xl mb-8">Experience</h2>

      <div className="space-y-6 max-w-3xl">
        <div className="border border-green-600 p-5 rounded">
          <h3 className="text-xl">MERN Developer Intern</h3>
          <p className="text-sm opacity-80">SpartanBots Technologies | Oct 2024 – Jan 2025</p>
          <p className="mt-2 text-sm">
            Worked on MERN stack applications, built REST APIs, handled frontend
            logic with React, and collaborated with senior developers on real projects.
          </p>
        </div>

        <div className="border border-green-600 p-5 rounded">
          <h3 className="text-xl">Web Developer Intern</h3>
          <p className="text-sm opacity-80">Space Window Company | Aug 2024 – Oct 2024</p>
          <p className="mt-2 text-sm">
            Developed responsive websites using HTML, CSS, JavaScript and WordPress,
            optimized performance, and implemented UI improvements.
          </p>
        </div>
      </div>
    </section>
  );
}