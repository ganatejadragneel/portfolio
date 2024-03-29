import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/travian.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import jioImg from 'assets/jiomart-img.jpg';
import amznJpg from 'assets/amazonKindle.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import { ExperienceSummary } from './ExperienceSummary';

const disciplines = ['Backend', 'Prototyper', 'Modder', 'Tester', 'Designer'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const experienceOne = useRef();
  const experienceTwo = useRef();
  const experienceThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, details, projectOne, projectTwo, projectThree,
      experienceOne, experienceTwo, experienceThree];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Software Developer"
        description="Portfolio of Gana Teja Akula — a software developer."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Smart Music"
        description="Application where one can play songs, view by country, do interesting searches with the openapi search to get unique results."
        buttonText="View website"
        buttonLink="https://smartmusic.netlify.app/"
        model={{
          type: 'laptop',
          alt: 'Smart Music',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Dashboard for Travian Troops"
        description="Dashboard for the Travian game troops and races and its analysis"
        buttonText="View website"
        buttonLink="https://ganatejadragneel.shinyapps.io/dashboard_travian/"
        model={{
          type: 'laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTexture],
              placeholder: gamestackTexturePlaceholder,
            }
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Online printing service"
        description="Webapp to make students life easier by allowing students to
         upload documents from the comfort of their home and getting the printouts from the shop."
        buttonText="View Social Page"
        buttonLink="https://www.facebook.com/xerohooks/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ExperienceSummary
        id="experience-1"
        sectionRef={experienceOne}
        visible={visibleSections.includes(experienceOne.current)}
        index={1}
        title="Reliance Jio Platforms Limited - Software Engineer"
        description="Coupons Management Team"
        buttonText="View Details"
        buttonLink="/experience/jioFT"
        model={{
          type: 'laptop',
          alt: 'Coupons Management Team',
          textures: [
            {
              srcSet: [jioImg, jioImg],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ExperienceSummary
        id="experience-2"
        alternate
        sectionRef={experienceTwo}
        visible={visibleSections.includes(experienceTwo.current)}
        index={2}
        title="Amazon - Software Development Engineer"
        description="Kindle Conversion Team"
        buttonText="View Details"
        buttonLink="/experience/amznFT"
        model={{
          type: 'laptop',
          alt: 'Software Development Engineer',
          textures: [
            {
              srcSet: [amznJpg, amznJpg],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ExperienceSummary
        id="experience-3"
        sectionRef={experienceThree}
        visible={visibleSections.includes(experienceThree.current)}
        index={3}
        title="Amazon - Software Development Engineer Intern"
        description="Kindle Conversion Team"
        buttonText="View Details"
        buttonLink="/experience/amznIntern"
        model={{
          type: 'laptop',
          alt: 'Software Development Engineer Intern',
          textures: [
            {
              srcSet: [amznJpg, amznJpg],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};
