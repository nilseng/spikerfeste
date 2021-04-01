import React, { useEffect, useState } from "react";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faSkiingNordic } from "@fortawesome/free-solid-svg-icons";
import { IReport, Level } from "../models/report";
import Button from "react-bootstrap/Button";
import { getReports } from "../services/reportService";

const Reports = () => {
  const [reports, setReports] = useState<IReport[]>();

  useEffect(() => {
    getReports().then((res) => setReports(res));
  }, []);

  return (
    <div className="container text-light">
      <h4>Siste smørerapporter</h4>
      {reports &&
        reports.map((report) => (
          <div key={report.id} className="card bg-dark p-2 my-2">
            <span className="text-muted small mb-1">
              {new Date(report.reportDate).toLocaleString(undefined, {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </span>
            <span className="small">
              {report.user?.name}
              {report.user?.level && (
                <span className="badge badge-success mx-2">
                  {Level[report.user.level]}
                </span>
              )}
            </span>
            <h5 className="my-2">
              {report.title}
              <span className="badge badge-primary mx-2">{report.area}</span>
            </h5>
            <p>{report.description}</p>
            {report.products.map((p, i) => (
              <div key={i}>
                <Button variant="link">
                  <FaIcon
                    icon={faSkiingNordic}
                    style={{ marginRight: "0.4rem" }}
                  ></FaIcon>
                  {p}
                </Button>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Reports;
