import express from'express'
import {vehiclepost,getdata} from'./controllers.js'

const route=express.Router()

route.post('/datapost',vehiclepost)

route.get('/getdata',getdata)

export default route