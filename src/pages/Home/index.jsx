import React from 'react';

import { Container } from './styles'

import Sidebar from '../../components/Sidebar';
import SidebarRight from '../../components/SidebarRight';
import HomeFeed from '../../components/HomeFeed';

function Home() {
  return <Container>
      <Sidebar />
      <HomeFeed />
      <SidebarRight />
  </Container>
}

export default Home;
