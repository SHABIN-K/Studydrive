import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import FormButtons from "../../ui/FormButtons";
import FormField from "./FormField";
import RoleSelect from "./RoleSelect";
import { roles } from "..";

const AdminModel = ({
  isOpen,
  isLoading,
  setIsOpen,
  userData,
  setUserData,
  handleSubmitButton,
}) => {
  const [selected, setSelected] = useState(roles[0]);
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
                        <RoleSelect
                          value={userData.userRole}
                          onChange={(newValue) => {
                            setUserData({ ...userData, userRole: newValue });
                          }}
                          data={roles}
                        />

                        <FormField
                          label="Name"
                          type="text"
                          name="name"
                          value={userData.name}
                          onChange={(e) =>
                            setUserData({ ...userData, name: e.target.value })
                          }
                        />

                        <FormField
                          label="Email"
                          type="email"
                          name="email"
                          value={userData.email}
                          onChange={(e) =>
                            setUserData({ ...userData, email: e.target.value })
                          }
                        />

                        <FormField
                          label="Phone Number"
                          type="tel"
                          name="phoneNumber"
                          value={userData.phoneNumber}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              phoneNumber: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <FormButtons
                      primaryLabel={isLoading ? "Updating..." : "Update"}
                      secondaryLabel="Cancel"
                      onPrimaryClick={handleSubmitButton}
                      onSecondaryClick={handleCloseModal}
                      className="btn_form"
                    />
                  </form>
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
