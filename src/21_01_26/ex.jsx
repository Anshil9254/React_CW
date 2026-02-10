import React, { useState, useEffect } from "react";

export default function Ex() {
  const [name, setName] = useState("Aniket");

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log("Name changed to:", name);
  }, [name]);

  useEffect(() => {
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  function changeName() {
    setName("Sanket");
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}