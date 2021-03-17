import express from "express"
import { ObjectID } from "mongodb"
import { checkJwt } from "../auth/auth"
import { collections as db } from "../database/databaseSetup"

const router = express.Router()

router.get("/data", async (req: any, res) => {
    const data = await db.collectionName.find({}).sort({ name: 1 }).toArray()
    res.status(200).json(data)
})

router.get("/data/:searchTerm", async (req: any, res) => {
    const data = await db.collectionName.find({ name: { $regex: req.params.searchTerm, $options: "i" } }).limit(5).toArray()
    res.status(200).json(data)
})

router.post("/data", checkJwt, async (req: any, res) => {
    const data = req.data
    data.sub = req.user.sub
    const date = Date.now()
    if (!data.createdAt) data.createdAt = date
    data.updatedAt = date
    const { _id, ...props } = data
    try {
        const doc = await db.collectionName.findOneAndUpdate({ _id: new ObjectID(_id) }, { $set: props }, { upsert: true, returnOriginal: false })
        res.status(200).json(doc.value)
    } catch (e) {
        res.status(400).json({ error: e })
    }
})

export default router