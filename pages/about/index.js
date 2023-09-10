import React, { useState } from 'react';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaKaggle,
  FaPython,
  FaReact,
} from 'react-icons/fa6';
import {
  SiFramer,
  SiMicrosoftexcel,
  SiNestjs,
  SiNextdotjs,
  SiPandas,
  SiPostgresql,
} from 'react-icons/si';

import CountUp from 'react-countup';

// data
export const aboutData = [
  {
    title: 'skills',

    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <SiNestjs key="nest" />,
        ],
      },
      {
        title: 'Data Science',
        icons: [
          <FaPython key="python" />,
          <SiPandas key="pandas" />,
          <FaKaggle key="kaggle" />,
          <SiMicrosoftexcel key="excel" />,
          <SiPostgresql key="psql" />,
        ],
      },
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Developer - Stream4Tech LLC',
        stage: '2022 Oct - Present',
      },
      {
        title: 'Software Developer - Automata Systems',
        stage: '2021 Mar - 2021 Sep',
      },
      {
        title: 'Intern - TSMHS Thika',
        stage: '2019 Jan - 2019 April',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        {/* <Avatar /> */}
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center -mt-4">
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating<span className="text-indigo-500"> stories</span> birth
            magnificent design.
          </motion.h2>
          <motion.p
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 years ago, I bagan freelancing as a developer. Since then, I,ve
            done remote work for agencies, counsulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-indigo-500 mb-2">
                  <CountUp start={0} end={2} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]:">
                  Years of experience
                </div>
              </div>

              {/* customers */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-indigo-500 mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]:">
                  Satisfied customers
                </div>
              </div>

              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-indigo-500 mb-2">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]:">
                  Finished Projects
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-indigo-500 mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]:">
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[400px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((data, dataIndex) => {
              return (
                <div
                  key={dataIndex}
                  className={`${
                    index === dataIndex &&
                    'text-indigo-500 after:w-[100%] after:text-indigo-500 after:transition-all after:duration-300 '
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-indigo-500/75 after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(dataIndex)}
                >
                  {data.title}
                </div>
              );
            })}
          </div>

          <div className="bg-indigo-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((data, dataIndex) => {
              return (
                <div
                  key={dataIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* tittle */}
                  <div className="font-light mb-2 md:mb-0">{data.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{data.stage}</div>

                  <div className="flex gap-x-4">
                    {/* icons */}
                    {data.icons?.map((icon, dataIndex) => {
                      return (
                        <div key={dataIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
