import { useState } from "react";

const User = () => {
  const [user, setUser] = useState(0);

  const increment = () => {
    setUser((prevState) => (prevState = prevState + 1));
    console.log(user);
  };

  return (
    <div>
      <div> Member: {user} </div>
      <button onClick={increment}>+</button>
    </div>
  );
};
export default User;
