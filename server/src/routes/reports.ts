import express from "express"
import { ObjectID } from "mongodb"
import { checkJwt } from "../auth/auth"
import { collections as db } from "../database/databaseSetup"

const router = express.Router()

router.get("/reports", async (req: any, res) => {
    const data = await db.reports.find({}).sort({ reportDate: -1 }).toArray()
    res.status(200).json(data)
})

router.get("/report/:searchTerm", async (req: any, res) => {
    const data = await db.reports.find({ name: { $regex: req.params.searchTerm, $options: "i" } }).limit(5).toArray()
    res.status(200).json(data)
})

router.post("/report", checkJwt, async (req: any, res) => {
    const report = req.body
    const date = Date.now()
    if (!report.createdAt) report.createdAt = date
    report.updatedAt = date
    const { _id, ...props } = report
    try {
        const doc = await db.reports.findOneAndUpdate({ _id: new ObjectID(_id) }, { $set: props }, { upsert: true, returnOriginal: false })
        res.status(200).json(doc.value)
    } catch (e) {
        res.status(400).json({ error: e })
    }
})

export default router