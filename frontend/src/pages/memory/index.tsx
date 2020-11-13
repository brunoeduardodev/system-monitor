import { MemoryInterface } from '@interfaces/index'
import React from 'react'

import useRequest from '@hooks/useRequest'

import Layout, { InfoContainer, Title, Infos, Info } from '@components/Layout'

const Memory: React.FC = () => {
  const { data } = useRequest<MemoryInterface[]>('/memory')

  if (!data) {
    return <p>Carregando</p>
  }

  return (
    <Layout>
      <InfoContainer>
        {data.map((ram, index) => (
          <React.Fragment key={index}>
            <Title>Ram #{index + 1}</Title>
            <Infos>
              <Info name="Size" value={ram.size} />
              <Info name="Bank" value={ram.bank} />
              <Info name="Type" value={ram.type} />
              <Info name="Clock Speed" value={ram.clockSpeed} />
              <Info name="Form Factor" value={ram.formFactor} />
              <Info name="Manufacturer" value={ram.manufacturer} />
              <Info name="Part Number" value={ram.partNum} />
              <Info name="Serial Number" value={ram.serialNum} />
              <Info name="Voltage Configured" value={ram.voltageConfigured} />
              <Info name="Voltage Min" value={ram.voltageMin} />
              <Info name="Voltage Max" value={ram.voltageMax} />
            </Infos>
          </React.Fragment>
        ))}
      </InfoContainer>
    </Layout>
  )
}

export default Memory
