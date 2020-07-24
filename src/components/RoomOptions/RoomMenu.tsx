import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import useHeight from '../../hooks/useHeight/useHeight';

const Container = styled('div')({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
});

export default function App() {
  const height = useHeight();

  return (
    <Container style={{ height }}>
      <Link to="/create">Crear Sala</Link>
      <Link to="/join">Unirse a Sala</Link>
    </Container>
  );
}
