import express from "express"
import UserController from "../controllers/user-controller.mjs"

const UserRouter = express.Router()

UserRouter.post("/:new-user", UserController.AddUser)
UserRouter.get("/:user", UserController.CheckUser)

export default UserRouter