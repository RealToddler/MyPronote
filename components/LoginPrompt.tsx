import { singInAndGetToken } from "modules/singIn";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { useRouter } from "next/router";

// function redirectToIndex() {
//   const router = useRouter();
//   router.push("/");
// }
var successfulLogIn = false;
const LoginPrompt = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonClick = async () => {

    try {
      if (!username || !password) {
        throw new Error("Please enter a username and a password");
      } else {
        const token = await singInAndGetToken(username, password); // Might need to export this, not sure if it is good to put is there yet
        console.log(`Token: ${token}`);
        successfulLogIn = token != "" ? true : false;
      };
    } catch (error) {
      console.error(error);
    };
    if (successfulLogIn) {
      console.log("tried to redirect");
      // tryToRedirect();
      // redirectToIndex();
      // return <Navigate replace to="/" />;
    } else {
      alert("Invalid username or password.");
    };
  };

  return (
    <div className="h-full w-full space-y-6">
      <div className="w-full text-lg">
        Username
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setUsername(event.target.value)}}
          required
          className="border-b-[2px] border-blue-900 outline-none w-full text-base"
        />
      </div>
      <div className="w-full text-lg">
        Password
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value)}}
          required
          className="border-b-[2px] border-blue-900 outline-none w-full text-base"
        />
      </div>
      <div className="flex justify-center w-full">
        <button className="w-full bg-blue-900 h-[40px] hover:bg-sky-400 text-white transition duration-700 rounded" onClick={handleButtonClick}>
          Log In
        </button>
      </div>
    </div>
    );
};

export default LoginPrompt;
