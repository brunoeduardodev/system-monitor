import React from 'react'
import styled from 'styled-components'

import Topbar from '@components/Topbar'

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Layout: React.FC = ({ children }) => (
  <Container>
    <Topbar />
    {children}
  </Container>
)

export default Layout

export const InfoContainer = styled.div`
  width: 100vw;
  background-color: var(--info-container-background);
  padding: 24px;
`

export const Title = styled.h1`
  font-size: 32px;
  color: var(--text);
  margin-bottom: 10px;
  font-weight: normal;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const InfoLayout = styled.div`
  display: flex;
  background: var(--info-odd-background);

  &:nth-child(even) {
    background: var(--info-even-background);
  }
`

export const InfoName = styled.p`
  font-weight: bold;
  color: var(--text);
  width: 20vw;
  border-right: 1px solid var(--info-name-border-color);
  padding: 12px 8px;
`

export const InfoValue = styled.p`
  color: var(--text);
  padding: 12px 8px;
`

interface InfoProps {
  name: string
  value?: string | number | boolean
}

export const Info: React.FC<InfoProps> = ({ name, value }) => {
  if (value === '' || value === 0) return <></>

  if (value === false) value = 'No'
  if (value === true) value = 'Yes'

  return (
    <InfoLayout>
      <InfoName>{name}</InfoName>
      <InfoValue>{value}</InfoValue>
    </InfoLayout>
  )
}
