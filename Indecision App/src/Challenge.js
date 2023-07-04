import { useState } from "react";

const Challenge = () => {
  const [app, setApp] = useState({
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [],
  });
  /* Form submit function */
  const formSubmit = (e) => {
    e.preventDefault();

    const optionInput = document.querySelector("input[name=option]");

    if (optionInput.value !== "") {
      /* merging new element in array AND mergin array in object*/
      setApp({ ...app, options: [...app.options, optionInput.value.toUpperCase()] });
      /* clearing input */
      optionInput.value = "";
    }
  };
  /* Reseting array */
  const resetAll = () => {
    setApp({ ...app, options: [] });
  };

  return (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>

      <ol>
        {
          app.options.map((item) => <li>{item}</li>)
        }
      </ol>

      <form action="#" onSubmit={formSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
        <button onClick={resetAll}>
          Reset All
        </button>
      </form>

    </div>
  );
};

export default Challenge;
