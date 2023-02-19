import Image from "next/image";
import LoginPrompt from "components/LoginPrompt";

const Login = () => {
  return (
    <div className="bg-blue-200 h-screen w-screen flex justify-center">
      <div className="bg-white h-3/5 w-2/5 self-center flex rounded-3xl">
        <div className="h-full w-1/2">
          <Image
            className="w-full h-full rounded-l-3xl"
            src="/01.png"
            alt=""
            width="1024"
            height="1024"
          />
        </div>
        <div className="h-full w-1/2 p-5 self-center space-y-12">
          <div className="flex justify-center text-3xl py-10">Log In</div>
          <LoginPrompt />
        </div>
      </div>
    </div>
  );
};

export default Login;
