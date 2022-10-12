import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const Container = styled.div`
   margin: 50%;
   
`

export const Loader = () => {
  return(
    <Container>
      <CircularProgress color="primary" />
    </Container>
  )
}
