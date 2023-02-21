import { signInAndGetToken } from "modules/signIn";
import { useState } from "react";

<<<<<<< HEAD
const LoginPrompt = () => {
  let successfulLogIn = false;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClick = async () => {
=======

var successfulLogIn = false;
const LoginPrompt = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  async function HandleButtonClick() {
    
>>>>>>> b68bb6a9080ede4b847a6efb1d5fe19cad6fe3ce
    try {
      if (!username || !password) {
        throw new Error("Please enter a username and a password");
      } else {
        const token = await signInAndGetToken(username, password); // Might need to export this, not sure if it is good to put is there yet
        console.log(`Token: ${token}`);
        successfulLogIn = token != "" ? true : false;
      }
    } catch (error) {
      console.error(error);
    }
    if (successfulLogIn) {
      console.log("tried to redirect");
<<<<<<< HEAD
=======
      window.location.href = "/";  // Redirect working, will need to add functionality to remember which user is logged when we get to db managing
>>>>>>> b68bb6a9080ede4b847a6efb1d5fe19cad6fe3ce
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="h-full w-full space-y-6">
      <div className="w-full text-lg">
        Username
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(event.target.value);
          }}
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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
          required
          className="border-b-[2px] border-blue-900 outline-none w-full text-base"
        />
      </div>
      <div className="flex justify-center w-full">
<<<<<<< HEAD
        <button
          className="w-full bg-blue-900 h-[40px] hover:bg-sky-400 text-white transition duration-700 rounded"
          onClick={handleButtonClick}
        >
=======
        <button className="w-full bg-blue-900 h-[40px] hover:bg-sky-400 text-white transition duration-700 rounded" onClick={HandleButtonClick}>
>>>>>>> b68bb6a9080ede4b847a6efb1d5fe19cad6fe3ce
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPrompt;
