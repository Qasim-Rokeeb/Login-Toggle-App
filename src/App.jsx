import ChangeName from "./components/ChangeName";
import LoginToggle from "./components/LoginToggle";


export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <LoginToggle />
      <ChangeName />
    </div>
  );
}

