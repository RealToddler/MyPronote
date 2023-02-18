import Image from "next/image";

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
          <h1 className="flex justify-center text-3xl py-10">Log In</h1>
          <div className="h-full w-full space-y-6">
            <div className="w-full text-lg">
              Username
              <input
                type="text"
                id="username"
                className="border-b-[2px] border-blue-900 outline-none w-full"
              />
            </div>
            <div className="w-full text-lg">
              Password
              <input
                type="password"
                id="password"
                className="border-b-[2px] border-blue-900 outline-none w-full"
              />
            </div>
            <div className="flex justify-center w-full">
              <button className="w-full bg-blue-900 h-[40px] hover:bg-sky-400 text-white transition duration-700 rounded">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
