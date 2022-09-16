import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

// hook
import useDarkSide from "../../hook/useDarkSide";

const SwitchToggle = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch checked={darkSide} sunColor="white" onChange={toggleDarkMode} size={40} />
    </>
  );
};

export default SwitchToggle;
