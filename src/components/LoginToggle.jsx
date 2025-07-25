import { useState } from "react";

export default function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">
        {isLoggedIn ? "Welcome back, Qasim!" : "Please log in"}
      </h1>

      <button
        onClick={toggleLogin}
        className={`px-6 py-2 rounded-lg text-white ${
          isLoggedIn ? "bg-red-500" : "bg-green-600"
        }`}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}


