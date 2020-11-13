import { BatteryInterface } from '@interfaces/index'
import React from 'react'

import useRequest from '@hooks/useRequest'

import Layout, { InfoContainer, Title, Infos, Info } from '@components/Layout'

const Battery: React.FC = () => {
  const { data } = useRequest<BatteryInterface>('/battery')

  if (!data) {
    return <p>Carregando</p>
  }

  return (
    <Layout>
      <InfoContainer>
        <Title>Battery</Title>
        <Infos>
          <Info name="Has battery?" value={data.hasbattery} />
          <Info name="Cycle count" value={data.cyclecount} />
          <Info name="Is charging?" value={data.ischarging} />
          <Info name="Designed capacity" value={data.designedcapacity} />
          <Info name="Max capacity" value={data.maxcapacity} />
          <Info name="Manufacturer" value={data.currentcapacity} />
          <Info name="Voltage" value={data.voltage} />
          <Info name="Capacity unit" value={data.capacityUnit} />
          <Info name="Percent" value={data.percent} />
          <Info name="Teime remaining" value={data.timeremaining} />
          <Info name="AC connected" value={data.acconnected} />
          <Info name="Type" value={data.type} />
          <Info name="Model" value={data.model} />
          <Info name="Manufacturer" value={data.manufacturer} />
          <Info name="Serial" value={data.serial} />
          <Info name="Design capacity" value={data.designcapacity} />
        </Infos>
      </InfoContainer>
    </Layout>
  )
}

export default Battery
