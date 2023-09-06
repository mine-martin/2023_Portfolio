import Link from "next/link";

import { RiGithubLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri"

import { FaKaggle } from "react-icons/fa6"

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={'https://github.com/mine-martin'}
        className="hover:text-indigo-500 transition-all duration-300"
      >
        <RiGithubLine />
      </Link>

      <Link
        href={'https://www.linkedin.com/in/martin-w-4749b21b1/'}
        className="hover:text-indigo-500 transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>

      <Link
        href={'https://www.kaggle.com/minemartin'}
        className="hover:text-indigo-500 transition-all duration-300"
      >
        <FaKaggle />
      </Link>

      <Link
        href={'https://twitter.com/martin_mine'}
        className="hover:text-indigo-500 transition-all duration-300"
      >
        <RiTwitterLine />
      </Link>


    </div>
  )
};

export default Socials;
