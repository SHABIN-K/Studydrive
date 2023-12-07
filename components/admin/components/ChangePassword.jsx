import { useState } from "react";

import FormButtons from "@/components/ui/FormButtons";
import FormField from "@/components/ui/FormField";
import { SmallLoading } from "@/public/assets";

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const styleChangePwd = {
    classlabel: "block mb-2 text-sm font-medium text-gray-900",
    classInput:
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle password change
    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);
    // Add your password change logic here
  };

  return (
    <div className="relative w-full max-w-sm h-full md:h-auto">
      <div className="relative p-4 bg-white rounded-lg sm:p-5">
        <div className="items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
          <h3 className="text-lg font-semibold text-gray-900">
            <a href="#changepwd">Change Password</a>
          </h3>
        </div>
        <div>
          <div className="mb-4">
            <FormField
              label="Current Password"
              type="password"
              name="oldPassword"
              value={oldPassword}
              placeholder="Enter old password"
              onChange={(e) => setOldPassword(e.target.value)}
              classLabel={styleChangePwd.classlabel}
              classInput={`${styleChangePwd.classInput} uppercase`}
            />
          </div>
          <div className="mb-4">
            <FormField
              label="New Password"
              type="password"
              name="newPassword"
              value={newPassword}
              placeholder="Enter new password"
              onChange={(e) => setNewPassword(e.target.value)}
              classLabel={styleChangePwd.classlabel}
              classInput={`${styleChangePwd.classInput} uppercase`}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="text-white inline-flex items-center bg-green-400 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {isLoading ? <SmallLoading /> : "Change password"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
