import Image from "next/image"
import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// import { fadeIn } from '../variants '

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">

      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">

          {/* tittle */}
          <h1 className="h1">Transfoming Ideas
            <br />
            <span className="text-accent">Digital Reality</span>
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In modi, facilis molestiae reprehenderit quas officiis ullam sunt veniam sit quo nihil doloribus unde voluptatibus eos est architecto. Veritatis, quod modi?
          </p>

          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

        </div>
      </div>
      <div>image</div>
    </div>
  )
};

export default Home;
