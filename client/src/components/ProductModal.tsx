import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import { useAuth0 } from "@auth0/auth0-react";
import { Product } from "../models/product";
import ModalContext, { ModalName } from "../ModalContext";

const ProductModal = () => {
  const { modal, setModal } = useContext(ModalContext);

  const { user, getIdTokenClaims } = useAuth0();

  const [product, setProduct] = useState<Product>({
    id: uuid(),
    name: "",
    producerId: "",
  });

  const handleHide = () => {
    setModal(undefined);
  };

  const handleInputChange = (e: any) => {
    setProduct((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onDelete = () => {
    console.log("delete");
  };

  const onSave = async () => {
    const token = await getIdTokenClaims();
    // TODO: Save product
    //await saveReport(token, report);
    handleHide();
  };

  return (
    <Modal show={modal === ModalName.ProductModal} onHide={handleHide}>
      <Modal.Body className="bg-dark text-light">
        <Form.Group>
          <Form.Text>Navn</Form.Text>
          <Form.Control
            name="name"
            type="text"
            value={product?.name}
            onChange={(e) => handleInputChange(e)}
            className="small bg-secondary text-light border-dark"
          ></Form.Control>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className="bg-dark text-light border-0">
        <Button variant="secondary" onClick={() => onDelete()}>
          <FaIcon icon={faTrash} className="ml-1" />
        </Button>
        <Button onClick={() => onSave()}>
          <FaIcon icon={faCheck} className="ml-1" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
