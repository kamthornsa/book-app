import React from "react";

const ShowUsers = ({ users }) => {
  return (
    <>
      <div>ShowUsers</div>
      <p>
        {users.map((item, index) => (
          <li key={index}>
            user {index} : {item}
          </li>
        ))}
      </p>
    </>
  );
};

export default ShowUsers;
