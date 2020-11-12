import { Router } from 'express'
import InfoController from '@controllers/Info'

const infoController = new InfoController()

const routes = Router()

routes.get('/', infoController.getAllInfo)
routes.get('/cpu', infoController.getCPUInfo)
export default routes
