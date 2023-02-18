import Image from "next/image";

const Header = (obj: {
  school: string;
  userSpace: string;
  userInfo: string;
  userImage: string;
}) => {
  return (
    <div className="flex h-[75px] w-screen bg-sky-900 text-white items-center">
      <div className="flex w-[60px] h-[60px] m-4">
        <Image src="/illuminati.png" alt="okand" width="200" height="200" />
      </div>
      <div className="w-full flex justify-center items-center space-x-4">
        <div className="w-[60px] h-[60px">
          <Image
            src="/toddler.png"
            alt="user image"
            width="200"
            height="200"
            className="rounded-full border-[2px] border-white"
          />
        </div>
        <div className="w-auto">
          <div className="text-center text-lg font-medium">{obj.school}</div>
          <div>
            {obj.userSpace} space - {obj.userInfo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
