import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import HomePage from "./pages/HomePage";


function App() {
 
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem("splashShown")
  );

  const handleFinish = () => {
    sessionStorage.setItem("splashShown", "true");
    setShowSplash(false);
  };

  if (showSplash) {
    return <Splash onFinish={handleFinish} />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
  );
}

export default App;