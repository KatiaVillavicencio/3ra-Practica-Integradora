import { Router } from "express";
//import { Users } from '../dao/y.js'
import UserDTO from "../dto/user.dto.js";
import { userService } from "../repositories/index.js";
import UserManager  from "../dao/classes/userManagerMongo.js"

const userRouter = Router()

const usersMongo = new UserManager()

userRouter.get("/", async (req, res) => {
    let result = await usersMongo.get()
    res.send({ status: "success", payload: result })
})

userRouter.post("/", async (req, res) => {
    let { first_name, last_name, email, age, password, rol } = req.body

    let user = new UserDTO({ first_name, last_name, email, age, password, rol })
    console.log(user)
    let result = await userService.createUser(user)
    console.log(result)
})

export default userRouter