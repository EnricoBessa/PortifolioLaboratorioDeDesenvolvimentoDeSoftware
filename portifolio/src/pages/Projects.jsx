import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import arrow from '/images/arrow.png';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects_list", { returnObjects: true });
  const certificates = t("certificate_list", { returnObjects: true });

  return (
    <>
      <section className="px-6 pt-28 pb-20 bg-gradient-to-br from-[#0c0c0c] via-[#141414] to-[#0c0c0c] relative overflow-hidden">

        {/* Glow Background */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-orange-500/20 blur-[150px] rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-orange-300 via-orange-100 to-white bg-clip-text text-transparent drop-shadow-xl">
            {t('projects_title')} {" "}
            <span className="font-extrabold text-white">{t('projects_span')}</span>
          </h1>

          <div className="mt-6 text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            <p className="opacity-90">{t('projects_intro')}</p>
          </div>
        </div>

        {/* Cards */}
        <div className="projects-grid mt-20">
          {projects.map((project) => (
            <Link
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.name}
              className="project-card group cursor-pointer"
            >

              <div className="project-icon-wrapper bg-white/10 backdrop-blur-md">
                <img
                  src={project.IconUrl}
                  alt="project icon"
                  className="project-icon"
                />
              </div>

              <h4 className="text-2xl font-bold text-white group-hover:text-orange-300 transition">
                {project.name}
              </h4>

              <p className="text-gray-300 mt-2">{project.initialDescription}</p>

              <h5 className="text-orange-300 text-sm uppercase font-semibold mt-3 tracking-wider">
                {project.technology}
              </h5>

              <ul className="mt-3 list-disc list-inside text-gray-200 space-y-1 text-sm">
                {project.description.split("\n").map(
                  (line, idx) =>
                    line.trim() !== "" && <li key={idx}>{line}</li>
                )}
              </ul>
            </Link>
          ))}
        </div>

        {/* Certificates Section */}
        <div className="relative max-w-6xl mx-auto text-center mt-32">
          <h2 className="text-5xl font-extrabold text-white drop-shadow-xl">
            {t('certificates_title')}
          </h2>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 **gap-12** max-w-3xl mx-auto mt-16 px-4">
          {certificates.map((cert, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={cert.path}
                alt={cert.name}
                className="w-full **aspect-video** object-cover rounded-xl shadow-lg border border-white/10 mt-10"
              />
              <p className="text-gray-200 mt-4 text-xl font-medium text-center">
                {cert.name}
              </p>
            </div>
          ))}
        </div>

      </section>

      <CTA />
    </>
  );
};

export default Projects;
