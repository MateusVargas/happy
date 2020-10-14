import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'

import OrphanageController from './controllers/OrphanagesController'

const ApiRoutes = Router()
const upload = multer(uploadConfig)

ApiRoutes.post('/orphanages', upload.array('images'), OrphanageController.create)
ApiRoutes.get('/orphanages', OrphanageController.index)
ApiRoutes.get('/orphanages/:id', OrphanageController.show)

export default ApiRoutes