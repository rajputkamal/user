import React, { useState } from "react";
import UserDetail from './UserDetail'

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [dialogueBox, setDialogueBox] = useState(false)

  const url = "https://dummyapi.io/data/v1/user?limit=10";

  fetch(url, {
    method: "GET",
    headers: new Headers({
      "app-id": "6200f750b9d3f148c5712e63",
    }),
  }).then(async function (response) {
    const data = await response.json();
    setUsers(data.data);
  });

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
        {users.map((user) => {
          return (
            <div
              className="bg-white flex flex-col px-4 py-2 rounded-md shadow-lg"
              key={user.id}
            >
              <div>
                <img src={user.picture} width={200} height={200} />
              </div>
              <div>
                <p className="text-[14px] text-gray-400">{user.id}</p>
              </div>
              <div>
                <h3>{user.firstName}</h3>
              </div>
              <div>
                <p className="text-[14px] text-gray-400">
                  {user.firstName + user.lastName + "@abc.com"}
                </p>
              </div>
              <hr className="my-2" />
              <div>
                <p className="underline text-red-400 text-sm cursor-pointer" onClick={setDialogueBox(true)}>
                  Get full profile
                </p>
              </div>
              <div>
                <p className="underline text-red-400 text-sm cursor-pointer">
                  Get posts Lists
                </p>
              </div>
            </div>
          );
        })}
        {dialogueBox ? <UserDetail /> : <></>}
      </div>
    </>
  );
};

export default UserList;
