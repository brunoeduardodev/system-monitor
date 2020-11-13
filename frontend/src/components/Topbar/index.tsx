import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { Container, Item } from './styles'

const Topbar: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Item active={router.pathname === '/'}>
        <Link href="/">
          <a>Proceesses</a>
        </Link>
      </Item>
      <Item active={router.pathname === '/cpu'}>
        <Link href="/cpu">
          <a>CPU</a>
        </Link>
      </Item>
      <Item active={router.pathname === '/memory'}>
        <Link href="/memory">
          <a>Memory</a>
        </Link>
      </Item>
      <Item active={router.pathname === '/battery'}>
        <Link href="/battery">
          <a>Battery</a>
        </Link>
      </Item>
      <Item active={router.pathname === '/graphics'}>
        <Link href="/graphics">
          <a>Graphics</a>
        </Link>
      </Item>
      <Item active={router.pathname === '/disk'}>
        <Link href="/disk">
          <a>Disk</a>
        </Link>
      </Item>
      <Item active={router.pathname === '/network'}>
        <Link href="/network">
          <a>Network</a>
        </Link>
      </Item>
    </Container>
  )
}

export default Topbar
