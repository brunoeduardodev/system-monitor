import Head from 'next/head'
import React from 'react'

import Layout from '@components/Layout'

import { ProcessesTable } from '@styles/index'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Layout>
        <ProcessesTable>
          <tr>
            <th>Process Name</th>
            <th>User</th>
            <th>Status</th>
            <th>% CPU</th>
            <th>% GPU</th>
            <th>% Memory</th>
            <th>PID</th>
            <th>Runtime</th>
          </tr>

          <tr>
            <td>Example Process</td>
            <td>System</td>
            <td>Running</td>

            <td align="right">10.2</td>
            <td align="right">0.4</td>
            <td align="right">15.2</td>
            <td align="right">123123</td>
            <td align="right">11:20:32</td>
          </tr>
          <tr>
            <td>Example Process</td>
            <td>System</td>
            <td>Running</td>
            <td align="right">10.2</td>
            <td align="right">0.4</td>
            <td align="right">15.2</td>
            <td align="right">123123</td>

            <td align="right">11:20:32</td>
          </tr>
          <tr>
            <td>Example Process</td>
            <td>System</td>
            <td>Running</td>
            <td align="right">10.2</td>
            <td align="right">0.4</td>
            <td align="right">15.2</td>
            <td align="right">123123</td>
            <td align="right">11:20:32</td>
          </tr>
        </ProcessesTable>
      </Layout>
    </>
  )
}

export default Home
