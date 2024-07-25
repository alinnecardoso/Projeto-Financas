import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../../styles/Layout';
import MyChart from '../../MyChart/MyChart';

function Dashboard() {
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>Todas as Transações</h1>
        <div className="stats-con">
          <div className="chart-con">
          <MyChart />
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`

`;

export default Dashboard