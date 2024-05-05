import { useState } from "react";


const ShortCircuit = () => {
const [text, setText] = useState("")
  const [name, setName] = useState("Al-Ameen")

  return (
    <div>
      <h2>ShortCircuit Example</h2>
      <h4>Falsy OR: {text || "Hello World"}</h4>
      <h4>Falsy AND: {text && "Hello World"}</h4>
      <h4>Truthy OR: {name || "Hello World"}</h4>
      <h4>Truthy AND: {name && "Hello World"}</h4>
    </div>
  );
}
export default ShortCircuit