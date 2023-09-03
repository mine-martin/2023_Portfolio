import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/portfolioavatar.png'}
        className="translate-z-0 w-full h-full" width={737} height={678} alt="" />

    </div>
  )
};

export default Avatar;
