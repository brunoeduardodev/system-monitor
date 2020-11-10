import SystemInformation from 'systeminformation'

export default class Network {
  getNetworkInfo = async () => {
    const newtworkInfo = await SystemInformation.networkInterfaces()

    return newtworkInfo
  }
}
