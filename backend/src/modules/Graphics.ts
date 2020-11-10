import SystemInformation from 'systeminformation'

export default class Graphics {
  getGraphicsInfo = async () => {
    const graphicsInfo = await SystemInformation.graphics()

    return graphicsInfo
  }
}
