import styled from 'styled-components'

export const ProcessesTable = styled.table`
  width: 100vw;
  border-collapse: collapse;
  th {
    text-align: center;
    background: var(--table-header-color);
    padding: 12px 0;
    border-right: 0.2px solid var(--table-header-border-color);
  }

  tr {
    background-color: var(--table-row-odd);

    &:nth-child(even) {
      background-color: var(--table-row-even);
    }
  }

  td {
    padding: 4px;
  }
`
