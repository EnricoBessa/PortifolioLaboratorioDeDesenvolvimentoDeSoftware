import { experience as experienceEn } from '../constants/experience.en';
import { experience as experiencePt } from '../constants/experience.pt';
import { education as educationEn } from '../constants/education.en';
import { education as educationPt } from '../constants/education.pt';
import { skills } from '../constants/index';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

  const experience = i18n.language === 'pt' ? experiencePt : experienceEn;
  const education = i18n.language === 'pt' ? educationPt : educationEn;

  return (
    <>
      <section className="w-full px-6 pt-28 pb-20 bg-gradient-to-br from-[#0c0c0c] via-[#141414] to-[#0c0c0c] relative overflow-hidden">

        {/* Glow Background */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-orange-500/20 blur-[150px] rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-orange-300 via-orange-100 to-white bg-clip-text text-transparent drop-shadow-xl">
            {t('about_title')} <span className="font-extrabold text-white">Enrico</span>
          </h1>

          <div className="mt-6 text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            <p className="opacity-90">{t('about_intro')}</p>
          </div>

          {/* Skills */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-white mb-8 border-b border-white/10 pb-3 tracking-wide">
              {t('about_my_skills')}
            </h3>

            <div className="flex flex-wrap gap-6 justify-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="w-24 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex justify-center items-center shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-orange-500/30"
                >
                  <img src={skill.imageUrl} alt={skill.name} className="w-12 h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="py-20">
          <h3 className="text-3xl font-semibold text-white mb-8 text-center border-b border-white/10 pb-3 tracking-wide">
            {t('about_education')}
          </h3>

          <div className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed text-center opacity-90">
            <p>{t('about_education_intro')}</p>
          </div>

          <div className="mt-14">
            <VerticalTimeline lineColor="rgba(255,255,255,0.15)">
              {education.map((edu, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={<div className="flex justify-center text-orange-300 font-semibold">{edu.date}</div>}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img src={edu.icon} alt={edu.institution_name} className="w-[65%] h-[65%] object-contain" />
                    </div>
                  }
                  iconStyle={{
                    background: edu.iconBg,
                    borderRadius: "50%",
                    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                  }}
                  contentStyle={{
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    padding: "20px 25px",
                  }}
                >
                  <div className="text-white text-xl font-semibold">
                    <h3>{edu.title}</h3>
                    <p className="text-gray-300 font-medium m-0">{edu.institution_name}</p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {edu.points.map((point, i) => (
                      <li key={`education-point-${i}`} className="text-gray-300 text-sm pl-1">
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        {/* Experience */}
        <div className="py-20">
          <h3 className="text-3xl font-semibold text-white mb-8 text-center border-b border-white/10 pb-3 tracking-wide">
            {t('about_experience')}
          </h3>

          <div className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed text-center opacity-90">
            <p>{t('about_experience_intro')}</p>
          </div>

          <div className="mt-14">
            <VerticalTimeline lineColor="rgba(255,255,255,0.15)">
              {experience.map((exp, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={<div className="flex justify-center text-orange-300 font-semibold">{exp.date}</div>}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img src={exp.icon} alt={exp.company_name} className="w-[65%] h-[65%] object-contain" />
                    </div>
                  }
                  iconStyle={{
                    background: exp.iconBg,
                    borderRadius: "50%",
                    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                  }}
                  contentStyle={{
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    padding: "20px 25px",
                  }}
                >
                  <div className="text-white text-xl font-semibold">
                    <h3>{exp.title}</h3>
                    <p className="text-gray-300 font-medium m-0">{exp.company_name}</p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={`experience-point-${i}`} className="text-gray-300 text-sm pl-1">
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

      </section>

      <CTA />
    </>
  );
};

export default About;
