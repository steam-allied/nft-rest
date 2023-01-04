import express from "express"
import swap from "../../database/models/swap.js"
import { swapController } from "../controllers/swapController.js"

export const swapRouter = express.Router()

swapRouter
    .post("/", swapController.newSwap)
    .patch("/", swapController.updateSwap)
    .get("/history", swapController.history)
    .get("/pending", swapController.getPending)
    .post("/signature",swapController.sendSign)
