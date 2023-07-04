import { useState } from "react";

const Playgorund = () => {
  //-----------------------Hook with object------------------
  /* const [person, setPerson] = useState({
    name: "Ali",
    surname: "Durul",
    hobbies: ['coding', 'soccer']
  });

  const changeName = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  const changeSurname = (e) => {
    setPerson({ ...person, surname: e.target.value });
  }; */

  //-----------------------Hook with array------------------
  /*   const [items, setItems] = useState([])

  const addItem = () => {
    setItems([...items, {
        id:items.length,
        value: Math.floor(Math.random() *10) + 1
    }])
    console.log(items)
  } */

  return (
    <div>
      {/* -----------------------Hook with object------------------  */}
      {/*  <h1>HomePage</h1>
      <input type="text" onChange={changeName} />
      <input type="text" onChange={changeSurname} />
      <p>first Name: {person.name} </p>
      <p>Last Name: {person.surname}</p> */}

      {/* -----------------------Hook with array------------------  */}
    {/*   <button onClick={addItem}>Click </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Playgorund;
