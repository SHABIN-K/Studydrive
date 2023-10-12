import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { UserValidation } from "@/libs/validations/user";
import FormButtons from "./ui/FormButtons";
import FormField from "./ui/FormField";
import RoleSelect from "./ui/RoleSelect";
import { roles } from ".";

const AdminPlayground = () => {
  //const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [userRole, setUserRole] = useState(roles[1]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate user input using the schema
    const userInput = {
      email,
      name,
      password,
      phoneNumber,
    };

    try {
      // Validate the user input
      const validation = UserValidation.registration.safeParse(userInput);

      //if validation is failure, return error message
      if (validation.success === false) {
        const { issues } = validation.error;
        issues.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        // If validation is successful, make the API request
        const response = await axios.post("/api/user", {
          userRole,
          name,
          email,
          phoneNumber,
          password,
        });

        if (response.statusText === "FAILED") {
          toast.error(response.data);
        } else {
          toast.success("Successfully created");
          handleReset();
        }
      }
    } catch (err) {
      console.error("NEXT_AUTH_ERROR: " + err);
      console.log(err.response);
      toast.error("something went wrong !!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setUserRole(role[1]);
    setName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
  };

  return (
    <div className="flex min-h-full p-4 text-center">
      <div className="w-full max-w-sm max-h-xs transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        <h1 as="h3" className="text-xl font-semibold leading-6 text-gray-900">
          Create User
        </h1>
        <h3 className="text-sm text-gray-500">
          This information is secret so be careful
        </h3>

        <div className="mt-4">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-gray-900 text-sm font-medium">
                  User role
                </label>
                <RoleSelect
                  selectedRole={userRole}
                  setSelectedRole={setUserRole}
                  data={roles}
                />

                <FormField
                  label="Name"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="joe Black"
                  onChange={(e) => setName(e.target.value)}
                />
                <FormField
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="joe@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormField
                  label="Phone Number"
                  type="tel"
                  name="phonenumber"
                  value={phoneNumber}
                  placeholder="+912344353434"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <FormField
                  label="Password"
                  type="password"
                  name="phonenumber"
                  value={password}
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <FormButtons
              primaryLabel={isLoading ? "Creating..." : "Create"}
              secondaryLabel="Clear"
              onPrimaryClick={handleSubmit}
              onSecondaryClick={handleReset}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPlayground;
