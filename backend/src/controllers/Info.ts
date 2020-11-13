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

  getCPUInfo = async (req: Request, res: Response) => {
    const cpu = await this.cpuController.getCPUInfo()
    res.json(cpu)
  }

  getMemoryInfo = async (req: Request, res: Response) => {
    const memory = await this.memoryController.getMemoryInfo()
    res.json(memory)
  }

  getBatteryInfo = async (req: Request, res: Response) => {
    const battery = await this.batteryController.getBatteryInfo()
    res.json(battery)
  }

  getGraphicsInfo = async (req: Request, res: Response) => {
    const graphics = await this.graphicsController.getGraphicsInfo()
    res.json(graphics)
  }

  getDiskInfo = async (req: Request, res: Response) => {
    const disk = await this.diskController.getDiskInfo()
    res.json(disk)
  }

  getNetworkInfo = async (req: Request, res: Response) => {
    const network = await this.networkCcontroller.getNetworkInfo()
    res.json(network)
  }
}
