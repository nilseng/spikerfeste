import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ReportModal from "./components/ReportModal";
import Reports from "./components/Reports";
import ModalContext from "./ModalContext";

function App() {
  const [showModal, setShowModal] = useState(false);

  const { user } = useAuth0();

  return (
    <>
      <ModalContext.Provider value={{ showModal, setShowModal }}>
        {user && <ReportModal />}
        <NavBar />
        <Reports />
      </ModalContext.Provider>
    </>
  );
}

export default App;
