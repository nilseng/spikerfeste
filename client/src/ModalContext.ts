import React from "react"

const showModal: boolean = false
const setShowModal: Function = () => { }

const ModalContext = React.createContext({ showModal, setShowModal });

export default ModalContext