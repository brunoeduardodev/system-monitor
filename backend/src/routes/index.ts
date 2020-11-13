import { Router } from 'express'
import InfoController from '@controllers/Info'

const infoController = new InfoController()

const routes = Router()

routes.get('/', infoController.getAllInfo)
routes.get('/cpu', infoController.getCPUInfo)
routes.get('/memory', infoController.getMemoryInfo)
routes.get('/battery', infoController.getBatteryInfo)
routes.get('/graphics', infoController.getGraphicsInfo)
routes.get('/disk', infoController.getDiskInfo)
routes.get('/network', infoController.getNetworkInfo)

export default routes
