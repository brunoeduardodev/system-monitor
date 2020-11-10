import SystemInformation from 'systeminformation'

export default class ProcessesController {
  getAllProcesses = async () => {
    const { list } = await SystemInformation.processes()

    const allProcesses = list.map(process => ({
      name: process.name,
      cpu: process.pcpu,
      memory: process.pmem,
      state: process.state,
      user: process.user,
      pid: process.pid,
      runtime: process.started
    }))

    return allProcesses
  }
}
