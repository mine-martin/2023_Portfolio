import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiRectangleGroup,
  HiEnvelope,
} from 'react-icons/hi2';

//  links
const links = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  // {
  //   name: 'testimonials',
  //   path: '/testimonials',
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen p-0">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[60px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {links.map((data, index) => {
          return (
            <Link
              className={`${
                data.path === pathname && 'text-indigo-500'
              } relative flex items-center group hover:text-indigo-500 transition-all duration-300`}
              href={data.path}
              key={index}
            >
              {/* name */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-indigo-500/80 relative flex text-primary items-center p-[6px] xl:rounded-md">
                  <div className="text-[12px] leading-none font-bold capitalize">
                    {data.name}
                  </div>

                  {/* triangle */}
                  <div className="border-solid border-l-indigo-500/80 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>

              {/* icon */}
              <div>{data.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
