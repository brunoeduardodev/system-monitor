import { CPU } from '@interfaces/index'
import React from 'react'

import useRequest from '@hooks/useRequest'

import Layout, { InfoContainer, Title, Infos, Info } from '@components/Layout'

const Cpu: React.FC = () => {
  const { data } = useRequest<CPU>('/cpu')

  console.log(data)

  if (!data) {
    return <p>Carregando</p>
  }
  return (
    <Layout>
      <InfoContainer>
        <Title>CPU</Title>
        <Infos>
          <Info name="Manufacturer" value={data.manufacturer} />
          <Info name="Brand" value={data.brand} />
          <Info name="Vendor" value={data.vendor} />
          <Info name="Family" value={data.family} />
          <Info name="Model" value={data.model} />
          <Info name="Stepping" value={data.stepping} />
          <Info name="Revision" value={data.revision} />
          <Info name="Voltage" value={data.voltage} />
          <Info name="Speed" value={data.speed} />
          <Info name="Speed Min" value={data.speedmin} />
          <Info name="Speed Max" value={data.speedmax} />
          <Info name="Governor" value={data.governor} />
          <Info name="Cores" value={data.cores} />
          <Info name="Physical Cores" value={data.physicalCores} />
          <Info name="Processors" value={data.processors} />
          <Info name="Socket" value={data.socket} />
        </Infos>

        <Title>Cache</Title>
        <Infos>
          <Info name="L1 Data" value={data.cache.l1d} />
          <Info name="L1 Inst" value={data.cache.l1i} />
          <Info name="Level 2" value={data.cache.l2} />
          <Info name="Level 3" value={data.cache.l3} />
        </Infos>
      </InfoContainer>
    </Layout>
  )
}

export default Cpu
