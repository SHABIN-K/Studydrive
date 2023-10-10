import axios from "axios";
import toast from "react-hot-toast";

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { UserValidation } from "@/libs/validations/user";

const role = ["ADMIN", "USER"];

const AdminPlayground = () => {
  //const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [userRole, setUserRole] = useState(role[1]);
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

    // Validate the user input
    // const validation = UserValidation.parse(userInput);
    // console.log(validation);

    try {
      UserValidation.parse(userInput);
      // If validation is successful, make the API request
      const response = await axios.post("/api/user", {
        userRole,
        name,
        email,
        phoneNumber,
        password,
      });

      if (response.statusText === "OK") {
        toast.error(response.data);
      } else {
        toast.success("Successfully created");
        handleReset();
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
                <Listbox value={userRole} onChange={setUserRole}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate">{userRole}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {role.map((role, index) => (
                          <Listbox.Option
                            key={index}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-amber-100 text-amber-900"
                                  : "text-gray-900"
                              }`
                            }
                            value={role}
                          >
                            {({ userRole }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    userRole ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {role}
                                </span>
                                {userRole && (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                )}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>

                <label
                  htmlFor="name"
                  className="text-gray-900 text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="joe Black"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  required
                />

                <label
                  htmlFor="email"
                  className="text-gray-900 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="joe@example.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  required
                />

                <label
                  htmlFor="number"
                  className="text-gray-900 text-sm font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="number"
                  value={phoneNumber}
                  placeholder="+912344353434"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  required
                />
                <label
                  htmlFor="number"
                  className="text-gray-900 text-sm font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  required
                />
              </div>
            </div>

            <div className="mt-4 space-x-3">
              <button type="button" className="btn_form" onClick={handleReset}>
                Clear
              </button>
              <button
                type="button"
                className="btn_form"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? "Creating..." : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPlayground;
//crud
