import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import useReferencia from '../hooks/useReferencia'
import FormularioReferenciaAdminEditarMobile from './FormularioReferenciaAdminEditarMobile'


const ModalEditarMobileAdmin = () => {

    const {modalEditarMobileAdmin, HandleEditarMobileAdmin} = useReferencia()
 
    return (
        <Transition.Root show={ modalEditarMobileAdmin } as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-visible" onClose={ HandleEditarMobileAdmin }>
                <div className="flex justify-center text-center sm:block sm:p-0">
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
                            className="flex inset-0 bg-opacity-75 transition-opacity" 
                        />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="overflow-visible inline-block align-middle h-screen" aria-hidden="false">
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
                            <div className="inline-block align-bottom rounded-lg px-4 pt-5 pb-4 text-left transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">

                            <div className="flex justify-center w-full">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900 ">
                                        
                                    </Dialog.Title>
                                    <FormularioReferenciaAdminEditarMobile/>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ModalEditarMobileAdmin