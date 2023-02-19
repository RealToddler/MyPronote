import { singInAndGetToken } from "modules/singIn";
import { useState } from "react";


const LoginPrompt = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
  };

  const handleButtonClick = async () => {

    try {
        const token = singInAndGetToken(username, password); // Might need to export this, not sure if it is good to put is there yet
        console.log(`Token: ${token}`);
    } catch (error) {
      console.error(error);
      alert("Please enter valid credentials.");
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
          onChange={onUsernameChange}
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
          onChange={onPasswordChange}
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
