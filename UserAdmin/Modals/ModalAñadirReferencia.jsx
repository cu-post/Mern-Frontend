import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import useReferencia from '../hooks/useReferencia'
import EditarReferencia from '../paginas/EditarReferencia'


const ModalAñadirReferencia = () => {

    const {modalAñadirReferencia, HandleAñadirReferencia} = useReferencia()
 
    return (
        <Transition.Root show={ modalAñadirReferencia } as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={ HandleAñadirReferencia }>
                <div className="flex items-center justify-center min-h-screen w-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay 
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
                        />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden overflow-visible items-center justify-center align-middle h-screen w-screen" aria-hidden="true">
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                            <div className="inline-block align-middle rounded-lg px-4 pt-5 pb-4 text-left overflow-auto transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">



                            <div className="sm:flex sm:items-start flex justify-center ">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900">
                                        
                                    </Dialog.Title>
                                    <EditarReferencia/>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ModalAñadirReferencia