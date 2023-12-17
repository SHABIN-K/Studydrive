"use client";

import { toast } from "sonner";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";

const PostViewDialogBox = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }
  return <div>PostViewDialogBox</div>;
};

export default PostViewDialogBox;
