import React         from 'react';
import { Navbar }    from '../components/Navbar';
import { Container } from '@material-ui/core';

export const MainLayout: React.FC = ({children}) => {
  return (
    <>
      <Navbar/>
      <Container style={{margin: '90px auto'}}>
        {children}
      </Container>
    </>
  );
};

