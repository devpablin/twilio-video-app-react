import React from 'react';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import useHeight from '../../hooks/useHeight/useHeight';

const Container = styled('div')({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
});

export default function App() {
  const height = useHeight();

  return (
    <Container style={{ height }}>
      <Grid container direction="column" justify="center" alignItems="center" className="create-room-form">
        <div>Crear Sala Form</div>
      </Grid>
    </Container>
  );
}
