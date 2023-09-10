import Image from 'next/image';
import { motion } from 'framer-motion';

import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/90 to-black/20">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* tittle */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Transfoming Ideas
            <br />
            <span className="text-indigo-500/75">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-20 xl:mb-16"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In modi,
            facilis molestiae reprehenderit quas officiis ullam sunt veniam
          </motion.p>

          {/* button */}
          <div className="flex justify-center xl:hidden relative mb-20">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none  xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute translate-z-0">
          image
        </div>

        {/* particles */}
        <ParticlesContainer className="w-full h-full" />

        {/* my avatar */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-40 -right-0 lg:-bottom-55
         lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
