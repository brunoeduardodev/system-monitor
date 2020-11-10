import { Router } from 'express'
import InfoController from '@controllers/Info'

const infoController = new InfoController()

const routes = Router()

routes.get('/', infoController.getAllInfo)

export default routes
