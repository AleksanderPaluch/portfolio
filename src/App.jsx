import "./App.css";

import Text from "./Text/Text";
import ThemeBtn from "./ThemeBtn/ThemeBtn";
function App() {
  return (
    <>
      <div className="flex h-screen w-full justify-center">
        <ThemeBtn />
        <Text />
      </div>
    </>
  );
}

export default App;
