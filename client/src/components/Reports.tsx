import React from "react";
import { IReport, Level } from "../models/report";

const reports: IReport[] = [
  {
    id: "1",
    title: "Fantastiske ski i dag!",
    description: ["God glid og spikerfeste. Klisterføre av beste sort!"],
    products: [],
    rating: 1,
    reportDate: 1616352921000,
    createdAt: 1616352921000,
    updatedAt: 1616352921000,
    user: { sub: "1", name: "Teodor Nilseng Danielsen", level: 1 },
    area: "Nordmarka",
  },
];

const Reports = () => {
  return (
    <div className="container text-light">
      <h4>Siste smørerapporter</h4>
      {reports.map((report) => (
        <div key={report.id} className="card bg-dark p-2 m-2">
          <span className="text-muted small mb-1">
            {new Date(report.reportDate).toLocaleString(undefined, {
              weekday: "short",
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
          <span className="small">
            {report.user.name}
            <span className="badge badge-success mx-2">
              {Level[report.user.level]}
            </span>
          </span>
          <h5 className="my-2">
            {report.title}
            <span className="badge badge-primary mx-2">{report.area}</span>
          </h5>
          {report.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Reports;
