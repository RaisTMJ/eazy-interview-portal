import React from 'react';
import Link from 'next/link';

const SkillTag = ({ name }: { name: string }) => (
  <div className="bg-slate-700/50 text-cyan-300 text-sm font-medium py-1.5 px-4 rounded-full transition-transform hover:scale-105">
    {name}
  </div>
);

const TechBadge = ({ name, className }: { name:string, className:string }) => (
    <span className={`text-sm font-semibold px-4 py-2 rounded-full ${className}`}>
        {name}
    </span>
);

const PortfolioPage = () => {
  return (
    <main className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
      <div className="container mx-auto max-w-5xl p-4 sm:p-8 md:p-12">

        {/* --- HERO / HEADER --- */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Mohamad Rais
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light text-cyan-400">
            Full-Stack Developer | Building with .NET & Modern JS Frameworks
          </p>
          <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 mt-6 text-slate-400">
            <span>Selangor, Malaysia</span>
            <span>•</span>
            <a href="mailto:rais95mohamad@gmail.com" className="hover:text-cyan-400 transition-colors">
              rais95mohamad@gmail.com
            </a>
            <span>•</span>
            <span>+6018-908-4870</span>
          </div>
        </section>
        <section className="bg-slate-800/50 p-8 rounded-2xl shadow-lg mb-12 backdrop-blur-sm border border-slate-700/50">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-4 inline-block">
            About Me
          </h2>
          <p>
            With  6 years of hands-on experience , I build and maintain robust web and mobile applications. My journey has taken me from enhancing frontend experiences with  Angular  to building cross-platform apps with  Flutter  and architecting powerful backends in the  .NET ecosystem . I thrive in collaborative environments and have a proven track record of leading development teams, managing CI/CD pipelines, and serving as a Scrum Master to deliver high-quality software.
          </p>
        </section>
        
        <section className="bg-slate-800/50 p-8 rounded-2xl shadow-lg mb-12 backdrop-blur-sm border border-slate-700/50">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-5 text-center">
           Interview Projet Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <TechBadge name="Next.js" className="bg-black text-white" />
            <TechBadge name=".NET" className="bg-purple-300 text-purple-900" />
            <TechBadge name="Azure SQL" className="bg-sky-300 text-sky-900" />
            <TechBadge name="Azure Storage" className="bg-sky-300 text-sky-900" />
            <TechBadge name="EF Core" className="bg-slate-300 text-slate-900" />
            <TechBadge name="Azurite" className="bg-yellow-300 text-yellow-900" />
            <TechBadge name="JWT Token" className="bg-red-300 text-red-900" />
            <TechBadge name="Vercel" className="bg-gray-800 text-white" />
          </div>

          {/* Project Links */}
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Project Links</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://github.com/RaisTMJ/eazy-interview-portal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors duration-200 border border-slate-600/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-slate-300 hover:text-white">Frontend Repository</span>
              </Link>

              <Link
                href="https://github.com/RaisTMJ/eazy-interview-backend"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors duration-200 border border-slate-600/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-slate-300 hover:text-white">Backend Repository</span>
              </Link>

              <Link
                href="https://my-eazy-recipe-new.azurewebsites.net/"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-500/30 rounded-lg transition-colors duration-200 border border-blue-500/30"
              >
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span className="text-blue-300 hover:text-blue-200">Backend API</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-8">
            My Journey
          </h2>
          <div className="space-y-8 border-l-2 border-slate-700 pl-8">
            {/* Job 1 */}
            <div className="relative">
              <div className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-cyan-400"></div>
              <p className="text-sm text-slate-400">July 2023 – September 2025</p>
              <h3 className="text-xl font-semibold text-white mt-1">Software Developer @ FPT Malaysia</h3>
              <p className="mt-2">
                Currently driving the maintenance and support of the Petronas Compass Project, leveraging a full-stack skill set in C#, Angular 14, and Azure Cloud.
              </p>
            </div>
            {/* Job 2 */}
            <div className="relative">
              <div className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-cyan-400"></div>
              <p className="text-sm text-slate-400">June 2019 – June 2023</p>
              <h3 className="text-xl font-semibold text-white mt-1">Senior Software Developer @ Enotaker Technology</h3>
              <p className="mt-2">
                Played a pivotal role across multiple projects, starting as a web developer and growing into a team lead. Key achievements include leading a dev team with Azure DevOps,  engineering a Flutter app  for project tracking, and executing a critical  backend migration from Firebase to a .NET and Azure  environment.
              </p>
            </div>
            {/* Job 3 */}
            <div className="relative">
              <div className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-cyan-400"></div>
              <p className="text-sm text-slate-400">May 2018 – May 2019</p>
              <h3 className="text-xl font-semibold text-white mt-1">Apprentice Developer @ Terang Academy Asia</h3>
              <p className="mt-2">
                Kicked off my career after an intensive Angular training program, providing crucial support and maintenance for enterprise systems using  JSP and Jasper Reports .
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <section className="lg:col-span-3">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-6">
                Tech Toolkit
              </h2>
              <div className="flex flex-wrap gap-3">
                <SkillTag name=".NET & C#" />
                <SkillTag name="Angular" />
                <SkillTag name="Flutter" />
                <SkillTag name="Azure Cloud" />
                <SkillTag name="Firebase" />
                <SkillTag name="Docker" />
                <SkillTag name="SQL Server" />
                <SkillTag name="Git & Azure DevOps" />
                <SkillTag name="Umbraco CMS" />
                <SkillTag name="SEO" />
                <SkillTag name="Jasper Reports" />
              </div>
            </section>

            {/* --- EDUCATION & CERTIFICATIONS --- */}
            <section className="lg:col-span-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-6">
                  Education & Certs
                </h2>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                    <h3 className="font-semibold text-white">BS Actuarial Science</h3>
                    <p className="text-sm text-slate-400">Universiti Kebangsaan Malaysia (2014-2017)</p>
                    <hr className="my-4 border-slate-700" />
                    <h4 className="font-semibold text-white mb-2">Past Certifications</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                        <li>Azure Solutions Architect Expert</li>
                        <li>Azure Security Engineer Associate</li>
                        <li>Azure Administrator Associate</li>
                    </ul>
                </div>
            </section>
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;