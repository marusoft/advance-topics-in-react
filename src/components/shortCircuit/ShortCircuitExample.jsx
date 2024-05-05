import { useState } from "react";

const ShortCircuitExample = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Al-ameen");
  const [user, setUser] = useState({
    firstname: "Muhammed",
    lastname: "Abdullah",
    matricnumber: 434343443,
    isAdmitted: "True",
  });
  return (
    <div>
      <h2>ShortCircuitExample</h2>

      {text || <p>Hello Short Circuit</p>}
      {text && <p>Hello Short Circuit</p>}
      {!name && <p>Hello name</p>}
      {name && <AnotherComponent {...user} />}
    </div>
  );
};

const AnotherComponent = (props) => {
  const { firstname, lastname, isAdmitted, matricnumber } = props;
  return (
    <div>
      <p>Firstname:{firstname}</p>
      <p>Lastname:{lastname}</p>
      <p>Matric Number: {matricnumber}</p>
      <p>Admission Status: {isAdmitted}</p>
    </div>
  );
};

export default ShortCircuitExample;
