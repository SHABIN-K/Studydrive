import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

import { roles } from "..";
import ListBox from "../ui/ListBox";
import FormField from "@/components/ui/FormField";
import FormButtons from "@/components/ui/FormButtons";
import { UserValidation } from "@/libs/validations/user";

const CreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [userRole, setUserRole] = useState(roles[1]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const defaultPassword = process.env.NEXT_PUBLIC_DEFAULT_PASSWORD;
    setPassword(defaultPassword || "");
  }, []);

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
    setUserRole(roles[1]);
    setName("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
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
              <label className="label_form">User role</label>
              <ListBox
                value={userRole}
                onChange={setUserRole}
                data={roles}
                style={{ bg: "bg-white" }}
              />

              <FormField
                label="Name"
                type="text"
                name="name"
                value={name}
                placeholder="joe Black"
                onChange={(e) => setName(e.target.value)}
                classLabel="label_form"
                classInput="input_form"
              />
              <FormField
                label="Email"
                type="email"
                name="email"
                value={email}
                placeholder="joe@example.com"
                onChange={(e) => setEmail(e.target.value)}
                classLabel="label_form"
                classInput="input_form"
              />
              <FormField
                label="Phone Number"
                type="tel"
                name="phonenumber"
                value={phoneNumber}
                placeholder="+912344353434"
                onChange={(e) => setPhoneNumber(e.target.value)}
                classLabel="label_form"
                classInput="input_form"
              />
            </div>
          </div>
          <div className="mt-4 space-x-3">
            <FormButtons
              primaryLabel={isLoading ? "Creating..." : "Create"}
              secondaryLabel="Clear"
              onPrimaryClick={handleSubmit}
              onSecondaryClick={handleReset}
              primaryClassName="btn_form"
              secondaryClassName="btn_form"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
