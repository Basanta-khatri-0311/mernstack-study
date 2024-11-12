import React, { createContext } from "react";

export const UserData = createContext();

const UserContext = ({ children }) => {
  const username = {
    name: "Basanta",
    age: 21,
    city: "Butwal",
  };

  return (
    <div>
      <UserData.Provider  value={username}>
        {children}
      </UserData.Provider>
    </div>
  );
};

export default UserContext;
