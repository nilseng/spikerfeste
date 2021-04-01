import { IdToken } from "@auth0/auth0-spa-js"
import { IReport } from "../models/report"

export const saveReport = async (token: IdToken, report: IReport) => {
    if (report.user) delete report.user
    const res = await fetch("/api/report", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token.__raw}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(report)
    })
    return res.json()
}

export const getReports = async () => {
    const reports = await fetch("/api/reports")
    return reports.json()
}