import React from 'react'

import Layout, {
  InfoContainer,
  Title,
  Infos,
  Info,
  InfoName,
  InfoValue
} from '@components/Layout'
import Topbar from '@components/Topbar'

const cpu: React.FC = () => {
  return (
    <Layout>
      <InfoContainer>
        <Title>CPU</Title>
        <Infos>
          <Info>
            <InfoName>Name</InfoName>
            <InfoValue>Intel Core I7 9700k</InfoValue>
          </Info>

          <Info>
            <InfoName>Name</InfoName>
            <InfoValue>Intel Core I7 9700k</InfoValue>
          </Info>

          <Info>
            <InfoName>Name</InfoName>
            <InfoValue>Intel Core I7 9700k</InfoValue>
          </Info>
        </Infos>
      </InfoContainer>
    </Layout>
  )
}

export default cpu
