import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const UploadDone = ({ isOpen, setIsOpen, handleInvite }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#1c1c24] p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    className="absolute top-4 right-4 text-lg text-[#4acd8d] hover:text-gray-300 cursor-pointer"
                    onClick={closeModal}
                  >
                    x
                  </button>

                  <Image
                    src="/done3.png"
                    width={340}
                    height={100}
                    alt="Done"
                    className="mx-auto mb-auto my-auto"
                    loading="lazy"
                  />

                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-center  leading-6 text-[#4acd8d]"
                  >
                    Thank You :)
                  </Dialog.Title>

                  <div className="mt-2">
                    <p className="text-sm text-gray-400">
                      Awesome! Your upload will make a big difference for
                      students, helping them perform better in their studies.
                    </p>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-[#4acd8d] hover:bg-gray-500"
                      onClick={handleInvite}
                    >
                      Done
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default UploadDone;
