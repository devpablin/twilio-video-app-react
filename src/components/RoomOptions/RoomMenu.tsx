import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import './RoomMenu.css';

import useHeight from '../../hooks/useHeight/useHeight';

const Container = styled('div')({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
});

export default function App() {
  const height = useHeight();

  return (
    <Container style={{ height }}>
      <Grid container direction="column" justify="center" alignItems="center" className="room-menu-options">
        <Link to="/create">
          <Button variant="contained" color="primary">
            Crear Sala
          </Button>
        </Link>

        <Link to="/join">
          <Button variant="contained" color="primary">
            Unirse a Sala
          </Button>
        </Link>
      </Grid>
    </Container>
  );
}
