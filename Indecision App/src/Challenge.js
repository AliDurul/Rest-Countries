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
      setApp({
        ...app,
        options: [...app.options, optionInput.value.toUpperCase()],
      });
      /* clearing input */
      optionInput.value = "";
    }
  };
  /* Reseting array */
  const resetAll = () => {
    setApp({ ...app, options: [] });
  };

  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);

    const option = app.options[randomNum]
    console.log(option);
  };

  return (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
      <button onClick={resetAll}>Remove All</button>
      <br />
      <br />
      {/* creating li by using map */}
      <ol>
        {app.options.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ol>

      {/* form input and submit button */}
      <form action="#" onSubmit={formSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
    </div>
  );
};

export default Challenge;
