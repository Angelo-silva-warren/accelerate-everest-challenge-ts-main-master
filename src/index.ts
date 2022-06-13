import express from 'express'
import UserRouter from './presentation/Routes'

const app = express()
const userRouter = new UserRouter()

app.use(express.json())
app.use(userRouter.router)

app.listen(3000, () => {
  console.log('Server is running on port 3000, localhost:3000')
})
