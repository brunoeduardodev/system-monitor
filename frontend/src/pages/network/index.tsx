import { NetworkInterface } from '@interfaces/index'
import React from 'react'

import useRequest from '@hooks/useRequest'

import Layout, { InfoContainer, Title, Infos, Info } from '@components/Layout'

const Network: React.FC = () => {
  const { data } = useRequest<NetworkInterface[]>('/network')

  if (!data) {
    return <p>Carregando</p>
  }

  return (
    <Layout>
      <InfoContainer>
        {data.map((network, index) => (
          <React.Fragment key={index}>
            <Title>Network #{index + 1}</Title>
            <Infos>
              <Info name="iface" value={network.iface} />
              <Info name="iface name" value={network.ifaceName} />
              <Info name="ip4" value={network.ip4} />
              <Info name="ip4 subnet" value={network.ip4subnet} />
              <Info name="ip6" value={network.ip6} />
              <Info name="ip6 subnet" value={network.ip6subnet} />
              <Info name="Mac" value={network.mac} />
              <Info name="Internal" value={network.internal} />
              <Info name="Virtual" value={network.virtual} />
              <Info name="Operstate" value={network.operstate} />
              <Info name="Type" value={network.type} />

              <Info name="Duplex" value={network.duplex} />
              <Info name="mtu" value={network.mtu} />
              <Info name="Speed" value={network.speed} />
              <Info name="dhcp" value={network.dhcp} />
              <Info name="dns suffix" value={network.dnsSuffix} />
              <Info name="ieee8021xAuth" value={network.ieee8021xAuth} />
              <Info name="ieee8021xState" value={network.ieee8021xState} />
              <Info name="carrierChanges" value={network.carrierChanges} />
            </Infos>
          </React.Fragment>
        ))}
      </InfoContainer>
    </Layout>
  )
}

export default Network
