import { useState, memo, useEffect } from "react";
import { nanoid } from "nanoid";

function generateStyles() {
  return {
    id: nanoid(),
    styles: {
      position: "absolute",
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      fontSize: Math.floor(Math.random() * (112 - 12) + 12),
      transform: `rotate(${Math.random() * (-60 - 60) + 60}deg)`,
      margin: 0,
      animation: `fadeIn 8s linear forwards`,
    },
  };
}

const Kaleidoscope = memo(function ({ text }) {
  const [strings, setStrings] = useState([generateStyles()]);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setStrings((prevStrings) =>
          prevStrings.length < 10
            ? [...prevStrings, generateStyles()]
            : [...prevStrings.shift(), generateStyles()]
        ),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {strings.map((string) => (
        <span key={string.id} style={string.styles}>
          {text}
        </span>
      ))}
    </>
  );
});

export default Kaleidoscope;
