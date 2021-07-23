console.clear()
//1 require express
const express = require("express")
//5 require the db:
const connectDB =require('./config/connectDB')
//7 require userroute:
// const userRoutes= require('./routes/api/userRoutes')

const contactRouter = require('./routes/contacts')



//2 init app
const app = express()


//6 app level midd
app.use(express.json())

connectDB()


//8 route level miss
app.use('/api/contacts', contactRouter)


//3 create the port
const PORT = 5000


//4 listen to the port

app.listen(PORT , err=> err? console.log(err): console.log('server is running'))