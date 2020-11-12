import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  margin: 22px auto;
  list-style: none;
`

interface ItemProps {
  active?: boolean
}

export const Item = styled.li<ItemProps>`
  a {
    display: block;
    color: #fff;
    font-size: 16px;
    background: var(--section-inactive);
    width: 108px;
    text-align: center;
    padding: 15px 0px;

    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: var(--section-hover);
    }

    ${({ active }) => active && 'background: var(--section-active)!important'}
  }
`
