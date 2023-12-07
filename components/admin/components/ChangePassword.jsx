import React, { useState } from "react";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle password change
    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);
    // Add your password change logic here
  
  };

  return (
    <div className="relative w-full max-w-2xl h-full md:h-auto py-6 pl-7 ">
      <div className="relative p-4 bg-white rounded-lg sm:p-5">
        <div className="items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
          <h3 className="text-lg font-semibold text-gray-900">
            <a>Change Password</a>
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={oldPassword}
              placeholder="Enter old password"
              onChange={handleOldPasswordChange}
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              placeholder="Enter new password"
              onChange={handleNewPasswordChange}
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
