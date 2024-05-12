import { useState } from "react";
import { data } from "../../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) return;
    const fakedId = Date.now()
    // console.log(fakedId);
    const newUser = {id: fakedId, name: name}
    const addedUser = [...users, newUser];
    setUsers(addedUser);
    setName("")

  };

  return (
    <div>
      <h2>Add User Challenge</h2>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add Users</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
      {/* render users below */}
      <h3>Users name</h3>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
