import * as React from 'react'
import { WithChildren } from '@app/types'

import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

interface ModalProps extends WithChildren {
  modalState: boolean
  toggleModal: () => void
  title: string
}

export const Modal: React.FC<ModalProps> = ({ modalState, toggleModal, title, children }) => {
  return (
    <Transition appear show={modalState} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={toggleModal}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex flex-col min-h-full items-center justify-center p-2 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div className="w-full flex flex-col items-center justify-center">
                <Image className="-mb-10" src="/vectors/seed-modal.svg" width={158} height={144} alt="seed-vector" />
                <Dialog.Panel className="w-72 md:w-96 max-w-md transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-center font-bold">
                    {title}
                  </Dialog.Title>
                  {children}
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
