
import { useState } from "react";

const Usestate = () => {

  const [name, setName] = useState("Arun");

  const changeName = () => {
    setName("Kumar");
  };

  return (
    <>

    <h1>Task1</h1>
      <h1>Name: {name}</h1>

      <button onClick={changeName}>
        Change Name
      </button>
    </>
  );
};

export default Usestate;
