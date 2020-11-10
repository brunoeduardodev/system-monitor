import SystemInformation from 'systeminformation'

export default class Disk {
  getDiskInfo = async () => {
    const diskInfo = await SystemInformation.diskLayout()

    return diskInfo
  }
}
