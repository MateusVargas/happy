import { Router } from 'express'

import OrphanageController from './controllers/OrphanagesController'

const ApiRoutes = Router()

ApiRoutes.post('/orphanages', OrphanageController.create)
ApiRoutes.get('/orphanages', OrphanageController.index)
ApiRoutes.get('/orphanages/:id', OrphanageController.show)

export default ApiRoutes