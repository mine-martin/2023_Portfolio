import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import ServiceSlider from '../../components/ServiceSlider';

//icons
import {} from 'react-icons/rx';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-6 flex items-center">
      <Circles />
      <Bulb />
    </div>
  );
};

export default Services;
