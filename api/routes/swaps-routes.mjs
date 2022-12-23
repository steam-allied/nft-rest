import express from "express"
import SwapsController from "../controllers/swaps-controller.mjs"

const SwapsRouter = express.Router()

SwapsRouter.post("/:new-swap", SwapsController.NewSwap)
SwapsRouter.patch("/:status", SwapsController.update)

export default SwapsRouter
