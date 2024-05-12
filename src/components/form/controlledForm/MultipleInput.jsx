import { useState } from "react";
import styles from "./form.module.css";

const MultipleInput = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  const handleOnchnage = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h2>ControlledForm with Multiple Input using on state value</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Enter Your Details</h2>
        <section className={styles.formRow}>
          <input
            type="text"
            placeholder="firstname"
            id="firstname"
            value={user.firstname}
            onChange={handleOnchnage}
            name="firstname"
            required
          />
        </section>
        <section className={styles.formRow}>
          <input
            type="text"
            placeholder="lastname"
            id="lastname"
            value={user.lastname}
            onChange={handleOnchnage}
            name="lastname"
          />
        </section>
        <section className={styles.formRow}>
          <input
            type="email"
            placeholder="email"
            id="email"
            value={user.email}
            onChange={handleOnchnage}
            name="email"
          />
        </section>
        <section className={styles.formRow}>
          <input
            type="text"
            placeholder="username"
            id="username"
            value={user.username}
            onChange={handleOnchnage}
            name="username"
          />
        </section>
        <section className={styles.formRow}>
          <input
            type="password"
            placeholder="password"
            id="password"
            value={user.password}
            onChange={handleOnchnage}
            name="password"
          />
        </section>
        <button type="submit">Send me</button>
      </form>
    </div>
  );
};
export default MultipleInput;
