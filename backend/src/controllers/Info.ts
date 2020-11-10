import Processes from '@modules/Processes'
import CPU from '@modules/CPU'
import Memory from '@modules/Memory'
import Battery from '@modules/Battery'

import { Request, Response } from 'express'
import Graphics from '@modules/Graphics'
import Disk from '@modules/Disk'
import Network from '@modules/Network'

export default class InfoController {
  private processesController = new Processes();
  private cpuController = new CPU();
  private memoryController = new Memory();
  private batteryController = new Battery();
  private graphicsController = new Graphics();
  private diskController = new Disk();
  private networkCcontroller = new Network();

  getAllInfo = async (req: Request, res: Response) => {
    console.log('Getting info')

    const processesPromise = this.processesController.getAllProcesses()
    const cpuPromise = this.cpuController.getCPUInfo()
    const memoryPromise = this.memoryController.getMemoryInfo()
    const batteryPromise = this.batteryController.getBatteryInfo()
    const graphicsPromise = this.graphicsController.getGraphicsInfo()
    const diskPromise = this.diskController.getDiskInfo()
    const networkPromise = this.networkCcontroller.getNetworkInfo()

    const [processes, cpu, memory, battery, graphics, disk, network] = await Promise.all([processesPromise, cpuPromise, memoryPromise, batteryPromise, graphicsPromise, diskPromise, networkPromise])

    res.json({
      processes,
      cpu,
      memory,
      battery,
      graphics,
      disk,
      network
    })
  }
}
