import SystemInformation from 'systeminformation'

export default class Memory {
  getMemoryInfo = async () => {
    const memoryInfo = await SystemInformation.memLayout()

    return memoryInfo
  }
}
