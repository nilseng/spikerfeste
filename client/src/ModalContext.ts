import React from "react"

export enum ModalName {
    ReportModal,
    ProductModal
}

const modal: string | undefined = undefined
const setModal: Function = () => { }

const ModalContext = React.createContext({ modal, setModal });

export default ModalContext