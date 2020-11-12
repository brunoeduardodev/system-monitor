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
`

export const Info = styled.div`
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
  flex: 1;
  padding: 12px 8px;
`
