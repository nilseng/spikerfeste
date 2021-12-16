import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ProductModal from "./components/ProductModal";
import ReportModal from "./components/ReportModal";
import Reports from "./components/Reports";
import ModalContext from "./ModalContext";

function App() {
  const [modal, setModal] = useState(undefined);

  const { user } = useAuth0();

  return (
    <>
      <ModalContext.Provider value={{ modal, setModal }}>
        {user && <ReportModal />}
        {user && <ProductModal />}
        <NavBar />
        <Reports />
      </ModalContext.Provider>
    </>
  );
}

export default App;
