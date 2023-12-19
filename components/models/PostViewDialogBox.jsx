"use client";

import { toast } from "sonner";
import { Fragment } from "react";
import { saveAs } from "file-saver";
import { Dialog, Transition } from "@headlessui/react";
import { ShareIcon, XMarkIcon } from "@heroicons/react/20/solid";

import { handlesharebtn } from "@/libs/utils";

const PostViewDialogBox = ({ isOpen, setIsOpen, data }) => {
  function closeModal() {
    setIsOpen(false);
  }

  const handleDownload = (url, filename) => {
    saveAs(url, `pasc-download-${filename}`);
    toast("successfully downloaded");
  };

  const SharePost = {
    title: "",
    content: `Hey! Check out ${data.course_name} ${
      data.title
    } on PascHub!\n#${data.subject_name.replace(/\s/g, "")}\n`,
    url: `${process.env.NEXT_PUBLIC_APP_URL}/post/${data.id.slice(
      15
    )}/${data.title.replace(/\s+/g, "-")}`,
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <XMarkIcon
                  className="text-black hover:text-gray-300 absolute top-4 right-4 text-lg  cursor-pointer w-6 h-6"
                  onClick={closeModal}
                />
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-semibold leading-6 text-black mt-3"
                >
                  {data.title}
                </Dialog.Title>
                <Dialog.Description className="text-md text-gray-500 font-medium mt-3">
                  {data.description}
                </Dialog.Description>
                <div className="mt-2 text-[15px] capitalize">
                  <ul>
                    <li>Subject : {data.subject_name}</li>
                    <li>Course : {data.course_name}</li>
                    <li>Semester : {data.semester_code}</li>
                    <li>Category : {data.category}</li>
                  </ul>
                </div>
                <div className="mt-4 flex justify-center gap-1">
                  <button
                    type="button"
                    className="rounded-full  items-center justify-center text-white bg-black hover:bg-gray-700 py-2.5 px-4 capitalize mt-4 w-full"
                    onClick={() =>
                      handleDownload(data.file_url, data.file_name)
                    }
                  >
                    Download
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-full items-center mt-4 py-2.5 px-4 text-white bg-black hover:bg-gray-700 w-full"
                    onClick={() => handlesharebtn(SharePost)}
                  >
                    <ShareIcon className="h-6 w-6" />
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

export default PostViewDialogBox;
