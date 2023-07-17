import { useState } from "react";
import Header from "./Header";
import Action from "./Action";
import Addoption from "./Addoption";
import Options from "./Options";

const IndecisionApp = () => {

  const [app, setApp] = useState({
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [],
  });

  return (
    <div>
      <Header {...app}/>
      <Action  app = {app} setApp={setApp}/>
      <Options app = {app}/>
      <Addoption app = {app} setApp={setApp}/>
    </div>
  );
};

export default IndecisionApp;
