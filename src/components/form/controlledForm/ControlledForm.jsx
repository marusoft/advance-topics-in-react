import { useState } from "react";
import styles from "./form.module.css";

const ControlledForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleChange = (e) => {
  //   console.log(e.target.firstname);
  //   console.log(e.target.value);
  // };


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstname, lastname, email)
  }

  return (
    <div>
      <h2>ControlledForm</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Enter Your Details</h2>
        <section className={styles.formRow}>
          <input
            type="text"
            placeholder="firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </section>
        <section className={styles.formRow}>
          <input
            type="text"
            placeholder="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </section>
        <section className={styles.formRow}>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section className={styles.formRow}>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <button type="submit">Send me</button>
      </form>
    </div>
  );
};
export default ControlledForm;
