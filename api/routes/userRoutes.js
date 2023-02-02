import express from "express"
import UserController from "../controllers/userController.js"

export const userRouter = express.Router()

userRouter.post("/:new-user", UserController.AddUser)
userRouter.get("/:user", UserController.CheckUser)