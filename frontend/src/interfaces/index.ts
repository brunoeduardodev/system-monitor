export interface CPU {
  manufacturer: string
  brand: string
  vendor: string
  family: string
  model: string
  stepping: string
  revision: string
  voltage: string
  speed: string
  speedmin: string
  speedmax: string
  governor: string
  cores: number
  physicalCores: number
  processors: number
  socket: string
  cache: {
    l1d: number
    l1i: number
    l2: number
    l3: number
  }
}

export interface MemoryInterface {
  size: number
  bank: string
  type: string
  clockSpeed: number
  formFactor: string
  manufacturer: string
  partNum: string
  serialNum: string
  voltageConfigured: number
  voltageMin: number
  voltageMax: number
}

export interface BatteryInterface {
  hasbattery: boolean
  cyclecount: number
  ischarging: boolean
  designedcapacity: number
  maxcapacity: number
  currentcapacity: number
  voltage: number
  capacityUnit: string
  percent: number
  timeremaining: number
  acconnected: boolean
  type: string
  model: string
  manufacturer: string
  serial: string
  designcapacity: number
}

export interface GraphicsInterface {
  controllers: {
    vendor: string
    model: string
    bus: string
    vram: number
    vramDynamic: boolean
  }[]

  displays: {
    vendor: string
    model: string
    deviceName: string
    main: boolean
    builtin: boolean
    connection: string
    resolutionx: number
    resolutiony: number
    sizex: number
    sizey: number
    pixeldepth: number
    currentResX: number
    currentResY: number
    positionX: number
    positionY: number
    currentRefreshRate: number
  }[]
}

export interface DiskInterface {
  device: string
  type: string
  name: string
  vendor: string
  size: number
  bytesPerSector: number
  totalCylinders: number
  totalHeads: number
  totalSectors: number
  totalTracks: number
  tracksPerCylinder: number
  sectorsPerTrack: number
  firmwareRevision: string
  serialNum: string
  interfaceType: string
  smartStatus: string
}

export interface NetworkInterface {
  iface: string
  ifaceName: string
  ip4: string
  ip4subnet: string
  ip6: string
  ip6subnet: string
  mac: string
  internal: boolean
  virtual: boolean
  operstate: string
  type: string
  duplex: string
  mtu: string
  speed: number
  dhcp: string
  dnsSuffix: string
  ieee8021xAuth: string
  ieee8021xState: string
  carrierChanges: number
}
