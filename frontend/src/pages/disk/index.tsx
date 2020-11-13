import { DiskInterface } from '@interfaces/index'
import React from 'react'

import useRequest from '@hooks/useRequest'

import Layout, { InfoContainer, Title, Infos, Info } from '@components/Layout'

const Disk: React.FC = () => {
  const { data } = useRequest<DiskInterface[]>('/disk')

  if (!data) {
    return <p>Carregando</p>
  }

  return (
    <Layout>
      <InfoContainer>
        {data.map((disk, index) => (
          <React.Fragment key={index}>
            <Title>Disk #{index + 1}</Title>
            <Infos>
              <Info name="Device" value={disk.device} />
              <Info name="Type" value={disk.type} />
              <Info name="Name" value={disk.name} />
              <Info name="Vendor" value={disk.vendor} />
              <Info name="Size" value={disk.size} />
              <Info name="Bytes per sector" value={disk.bytesPerSector} />
              <Info name="Total cylinders " value={disk.totalCylinders} />
              <Info name="Total heads" value={disk.totalHeads} />
              <Info name="Total sectors" value={disk.totalSectors} />
              <Info name="Total tracks" value={disk.totalTracks} />
              <Info
                name="Tracks per cylinders"
                value={disk.tracksPerCylinder}
              />

              <Info name="Sectors per track" value={disk.sectorsPerTrack} />
              <Info name="Firmware revision" value={disk.firmwareRevision} />
              <Info name="Serial number" value={disk.serialNum} />
              <Info name="Interface type" value={disk.interfaceType} />
              <Info name="Smart status" value={disk.smartStatus} />
            </Infos>
          </React.Fragment>
        ))}
      </InfoContainer>
    </Layout>
  )
}

export default Disk
