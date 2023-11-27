"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(true)
  const [isLinkCopied, setIsLinkCopied]= useState(false) 

  function closeModal() {
    setIsOpen(false)
  }

  const handleInviteClick = () => {
    const link = 'https://www.your-link.com';
    navigator.clipboard.writeText(link)
      .then(() => {
        console.log('Link copied to clipboard:', link);
        setIsLinkCopied(true);
        setTimeout(() => {
          setIsLinkCopied(false);
          
        }, 1000);
      })
      .catch((error) => {
        console.error('Error copying link to clipboard:', error);
      });
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
            <div className="fixed inset-0 bg-black/25" />
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
                  <img
                   className="mx-auto mb-auto my-auto"
                   src="/361.png"
                   alt="Image Alt Text"
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-[#4acd8d]"
                  >
                    Sharing is caring.....
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-400">
                    Maximize your learning potential – inspire your friends to join us in an exciting collaborative study journey!
                    </p>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-[#4acd8d] hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                     onClick={handleInviteClick}
                  
                    >
                      Invite Friends
                    </button>
                  </div>
                  {isLinkCopied && (
                <div className="mt-4 text-green-500 text-sm">
                  Link copied to clipboard!
                </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
