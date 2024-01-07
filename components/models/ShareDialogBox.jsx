"use client";

import Image from "next/image";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition } from "@headlessui/react";

import { handlesharebtn } from "@/libs/utils";

const ShareDialogBox = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }

  const post = {
    title: "Explore the web app designed for studies",
    content:
      "Discover a wealth of helpful study materials on our web app designed for students. Follow this link to join and enhance your learning experience.",
    url: process.env.NEXT_PUBLIC_APP_URL,
  };

  return (
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
                <XMarkIcon
                  className="text-[#4acd8d] hover:text-gray-300 absolute top-4 right-4 text-lg  cursor-pointer w-6 h-6"
                  onClick={closeModal}
                />
                <Image
                  src="/img/invite_img.webp"
                  width={340}
                  height={100}
                  alt="invite friends"
                  className="mx-auto mb-auto my-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-[#4acd8d]"
                >
                  Sharing is caring.....
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-400">
                    Maximize your learning potential – inspire your friends to
                    join us in an exciting collaborative study journey!
                  </p>
                </div>

                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-[#4acd8d] hover:bg-gray-500"
                    onClick={() => handlesharebtn(post)}
                  >
                    Invite Friends
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

export default ShareDialogBox;
