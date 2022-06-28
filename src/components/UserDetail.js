import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";



const UserDetail = () => {
  const url = "https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca";

  fetch(url, {
    method: "GET",
    headers: new Headers({
      "app-id": "60b1a6fbbf43a7e4bef68947",
    }),
  }).then(async function (response) {
    const data = await response.json();
    console.log(data);
  });

  return (
    <>
      <div className="flex justify-around border-2 border-red-600 p-6 bg-white rounded-md shadow-lg mt-4 gap-6">
        <div>
          <img src="/blog02.png" />
          <p className=" text-blue-400 mt-4 text-sm cursor-pointer">
                 <MdArrowBackIosNew />  Back to userlist
                </p>
        </div>
        <div>
          <p>user.id</p>
          <h3>username</h3>
          <p>Gender:</p>
          <p>Date of Birth: </p>
          <p>Register Date:</p>
          <p>Email: abc@gmail.com</p>
          <p>Phone: </p>
        </div>
        <div>
          <h3>Address</h3>
          <p>Scheme no 54 vijaynagar, Indore</p>
        </div>
        
      </div>
    </>
  );
};

export default UserDetail;
