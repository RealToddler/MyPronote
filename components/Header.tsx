import Image from "next/image";

const Header = (obj: {school: string, userSpace: string, userInfo: string, userImage: string}) => {
    return (
      <div className="h-[75px] w-screen bg-sky-900 flex justify-center items-center space-x-4 text-white">
        <div className="w-[60px] h-[60px]">
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
          <div>{obj.userSpace} space - {obj.userInfo}</div>
          
        </div>
      </div>
    );
}

export default Header;