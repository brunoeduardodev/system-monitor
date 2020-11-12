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
