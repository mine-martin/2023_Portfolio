import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import ServiceSlider from '../../components/ServiceSlider';

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-6 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb0">
            <h2 className="h2 xl:mt-8 ">
              My Services
              <span className="text-indigo-500">.</span>
            </h2>
            <p className="mb-4 max-w[400px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* slider */}
          <ServiceSlider />
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
