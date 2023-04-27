import { signIn } from "modules/login";
import { useState } from "react";


const LoginPrompt = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function HandleButtonClick() {
    try {
      if (!username || !password) {
        throw new Error("Please enter a username and a password");
      }
    } catch (error) {
      console.error(error);
    }
    if (await signIn(username, password)) {
      localStorage.setItem("local.username", username);
      console.log("trying to redirect");
      window.location.href = "/"; // Redirect working, will need to add functionality to remember which user is logged when we get to db managing
    } else {
      alert("Invalid username or password.");
    }
  }

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
        <button
          className="w-full bg-blue-900 h-[40px] hover:bg-sky-400 text-white transition duration-700 rounded"
          onClick={HandleButtonClick}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPrompt;
