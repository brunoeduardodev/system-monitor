import SystemInformation from 'systeminformation'

export default class CPU {
  getCPUInfo = async () => {
    const cpuInfo = await SystemInformation.cpu()

    return cpuInfo
  }
}
