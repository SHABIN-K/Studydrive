import { Fragment, useState } from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const role = ["ADMIN", "USER"];

const AdminModel = ({
  isOpen,
  isLoading,
  setIsOpen,
  userData,
  setUserData,
  handleSubmitButton,
}) => {
  const [selected, setSelected] = useState(role[0]);
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        {/* scrollable container */}
        <div className="fixed inset-0 overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* The actual dialog panel  */}
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-semibold leading-6 text-gray-900"
                >
                  Edit User Profile
                </Dialog.Title>

                <Dialog.Description className="text-sm text-gray-500">
                  This information is secret so be careful
                </Dialog.Description>

                <div className="mt-4">
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-gray-900 text-sm font-medium">
                          User role
                        </label>
                        <Listbox value={selected} onChange={setSelected}>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                              <span className="block truncate">{selected}</span>
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
                                    {({ selected }) => (
                                      <>
                                        <span
                                          className={`block truncate ${
                                            selected
                                              ? "font-medium"
                                              : "font-normal"
                                          }`}
                                        >
                                          {role}
                                        </span>
                                        {selected && (
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
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <label
                          htmlFor="name"
                          className="text-gray-900 text-sm font-medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={userData.name}
                          onChange={(e) =>
                            setUserData({ ...userData, name: e.target.value })
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
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
                          value={userData.email}
                          onChange={(e) =>
                            setUserData({ ...userData, email: e.target.value })
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
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
                          value={userData.phoneNumber}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              phoneNumber: e.target.value,
                            })
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="mt-4 space-x-3">
                  <button
                    type="button"
                    className="btn_form"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn_form"
                    onClick={handleSubmitButton}
                  >
                    {isLoading ? "updating..." : "Update"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AdminModel;
