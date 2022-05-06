import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CogIcon } from "@heroicons/react/solid";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center w-full h-10 px-4 py-2 my-5 text-xs font-bold bg-white border-2 border-white rounded-lg md:text-sm text-zinc-700 hover:text-zinc-700 hover:bg-zinc-200 hover:border-zinc-200 hover:dark:text-zinc-400 hover:dark:bg-zinc-600 hover:dark:border-zinc-400 dark:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-700 group"
      >
        <CogIcon
          className="w-3 h-3 mr-2 md:w-5 md:h-5 text-zinc-400 hover:text-zinc-500 hover:dark:text-zinc-400"
          fill="currentColor"
          aria-hidden="true"
        />
        Einstellungen
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[500000] overflow-y-auto bg-opacity-75 bg-zinc-700 backdrop-filter backdrop-blur-sm backdrop-brightness-50"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl dark:bg-zinc-900 rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-black leading-6 text-zinc-900 dark:text-zinc-300"
                >
                  Whoops!
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-zinc-500">
                    Diese Funktion ist derzeit nicht verfügbar.
                  </p>
                  <p className="text-sm text-zinc-500">
                    Bitte komm zu einem späteren Zeitpunkt wieder.
                  </p>
                </div>

                <div className="flex flex-row-reverse mt-4">
                  <button
                    type="button"
                    className="inline-flex px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md dark:text-blue-900 dark:hover:text-blue-400 dark:bg-blue-500 hover:bg-blue-200 dark:hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Alles klar!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
