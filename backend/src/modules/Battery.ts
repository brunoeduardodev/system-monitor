import SystemInformation from 'systeminformation'

export default class Battey {
  getBatteryInfo = async () => {
    const batteryInfo = await SystemInformation.battery()

    return batteryInfo
  }
}
