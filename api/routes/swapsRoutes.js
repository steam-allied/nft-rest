import express from "express"
import SwapsController from "../controllers/swapsController.js"

export const swapsRouter = express.Router()

swapsRouter.post("/:new-swap", SwapsController.NewSwap)
swapsRouter.patch("/:status", SwapsController.update)
