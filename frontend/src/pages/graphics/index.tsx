import { GraphicsInterface } from '@interfaces/index'
import React from 'react'

import useRequest from '@hooks/useRequest'

import Layout, { InfoContainer, Title, Infos, Info } from '@components/Layout'

const Graphics: React.FC = () => {
  const { data } = useRequest<GraphicsInterface>('/graphics')

  if (!data) {
    return <p>Carregando</p>
  }

  return (
    <Layout>
      <InfoContainer>
        {data.controllers.map((controller, index) => (
          <React.Fragment key={index}>
            <Title>Controller #{index + 1}</Title>
            <Infos>
              <Info name="Vendor" value={controller.vendor} />
              <Info name="Model" value={controller.model} />
              <Info name="Bus" value={controller.bus} />
              <Info name="VRAM" value={controller.vram} />
              <Info name="VRAM dynamic" value={controller.vramDynamic} />
            </Infos>
          </React.Fragment>
        ))}

        {data.displays.map((display, index) => (
          <React.Fragment key={index}>
            <Title>Display #{index + 1}</Title>
            <Infos>
              <Info name="Vendor" value={display.vendor} />
              <Info name="Model" value={display.model} />
              <Info name="Device name" value={display.deviceName} />
              <Info name="Main? " value={display.main} />
              <Info name="Builtin" value={display.builtin} />
              <Info name="Connection" value={display.connection} />
              <Info name="Resolution x" value={display.resolutionx} />
              <Info name="Resolution y" value={display.resolutiony} />
              <Info name="Size x" value={display.sizex} />
              <Info name="Size y" value={display.sizey} />
              <Info name="Pixel depth" value={display.pixeldepth} />
              <Info name="Current resolution x" value={display.currentResX} />
              <Info name="Current resolution y" value={display.currentResY} />
              <Info name="Position x" value={display.positionX} />
              <Info name="Position y" value={display.positionY} />
              <Info
                name="Current refresh rate"
                value={display.currentRefreshRate}
              />
            </Infos>
          </React.Fragment>
        ))}
      </InfoContainer>
    </Layout>
  )
}

export default Graphics
