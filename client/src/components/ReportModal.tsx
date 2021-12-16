import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";

import { IReport, IReportContent } from "../models/report";
import ModalContext, { ModalName } from "../ModalContext";
import { useAuth0 } from "@auth0/auth0-react";
import Col from "react-bootstrap/esm/Col";
import InputGroup from "react-bootstrap/esm/InputGroup";
import { convertToDateInputFormat } from "../utils/dateFunctions";
import { saveReport } from "../services/reportService";

const defaultContent: IReportContent = {
  title: "",
  description: "",
  products: [],
  rating: 3,
  reportDate: Date.now(),
  area: "Sjusjøen",
};

const ReportModal = () => {
  const { modal, setModal } = useContext(ModalContext);

  const { user, getIdTokenClaims } = useAuth0();

  const [report, setReport] = useState<IReport>({
    ...defaultContent,
    id: uuid(),
    user,
    userId: user.sub,
  });

  const handleHide = () => {
    setModal(undefined);
  };

  const handleInputChange = (e: any) => {
    setReport((report) => ({ ...report, [e.target.name]: e.target.value }));
  };

  const onDelete = () => {
    console.log("delete");
  };

  const onSave = async () => {
    const token = await getIdTokenClaims();
    await saveReport(token, report);
    handleHide();
  };

  return (
    <Modal show={modal === ModalName.ReportModal} onHide={handleHide}>
      <Modal.Body className="bg-dark text-light">
        <Form.Row className="mb-2">
          <Col sm={8}>
            <InputGroup size="sm">
              <Form.Control
                size="sm"
                type="datetime-local"
                placeholder="yyyy-mm-ddThh:mm"
                value={
                  report.reportDate
                    ? convertToDateInputFormat(report.reportDate)
                    : ""
                }
                onChange={(e) =>
                  setReport({
                    ...report,
                    reportDate: Date.parse(e.target.value),
                  })
                }
                className="bg-secondary text-light border-0"
              ></Form.Control>
            </InputGroup>
          </Col>
        </Form.Row>
        <Form.Group>
          <Form.Text>Overskrift</Form.Text>
          <Form.Control
            name="title"
            type="text"
            value={report?.title}
            onChange={(e) => handleInputChange(e)}
            className="small bg-secondary text-light border-dark"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Text>Beskrivelse</Form.Text>
          <Form.Control
            name="description"
            value={report.description}
            onChange={(e) => handleInputChange(e)}
            placeholder="Hvordan var skiene?"
            as="textarea"
            rows={3}
            className="small bg-secondary text-light border-dark"
          />
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

export default ReportModal;
