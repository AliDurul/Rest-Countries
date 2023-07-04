import { useState } from "react";

const App = () => {
  const [app, setApp] = useState({
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [],
  });

  const formSubmit = (e) => {
    e.preventDefault();
    const optionInput = document.querySelector("input[name=option]");
    if (optionInput.value !== "") {
      const newOptions = [...app.options, optionInput.value];
      setApp({ ...app, options: newOptions });
      optionInput.value = "";
      console.log(app.options);
    }
  };

  const resetAll = () => {

    app.options = []
    setApp({ ...app, options:[]  });
    console.log(app.options);

  }

  return (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
      <ol>
        <li>option 0ne</li>
        <li>option Two</li>
      </ol>
      <p>{app.options.length}</p>
      <p>{JSON.stringify(app.options)}</p>
      <form action="#" onSubmit={formSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
        <button type="submit" onClick={resetAll}>Add Option</button>
      </form>
    </div>
  );
};

export default App;
