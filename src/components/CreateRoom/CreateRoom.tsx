import React from 'react';
import { styled, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

import useHeight from '../../hooks/useHeight/useHeight';

const Container = styled('div')({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
});

const useStyles = makeStyles(theme => ({
  root: {},
  createRoom: {
    height: '100vh',
  },
  inputText: {
    margin: '10px',
    display: 'block',
  },
  inputText2: {
    margin: '10px',
  },
  labelPrice: {
    font: 'inherit',
    color: '#fff',
    fontSize: '1em',
    margin: '1em 0',
  },
  joinButton: {
    display: 'block',
    margin: '1em auto',
  },
  gridAction: {
    marginTop: '1em',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function App() {
  const height = useHeight();
  const classes = useStyles();
  return (
    <Container style={{ height }}>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.createRoom}>
        <Grid direction="column" justify="center" alignItems="center">
          <TextField id="filled-basic" label="Nombre Sala" className={classes.inputText} />
          <TextField
            id="filled-basic"
            label="Descripcion"
            className={classes.inputText}
            autoComplete="none"
            inputProps={{
              autocomplete: 'new-password',
              form: {
                autocomplete: 'off',
              },
            }}
          />
          <TextField
            id="filled-basic"
            label="Contraseña"
            type="password"
            className={classes.inputText}
            autoComplete="none"
            inputProps={{
              autocomplete: 'new-password',
              form: {
                autocomplete: 'off',
              },
            }}
          />
        </Grid>
        <Grid direction="row" justify="center" alignItems="center">
          <TextField
            id="filled-basic"
            label="Nro de Participantes"
            autoComplete="none"
            className={classes.inputText2}
            inputProps={{
              autocomplete: 'new-password',
              form: {
                autocomplete: 'off',
              },
            }}
          />
          <TextField id="filled-basic" label="Tiempo" autoComplete="none" className={classes.inputText2} />
        </Grid>
        <Grid justify="center" alignItems="center" direction="column" className={classes.gridAction}>
          <FormControl fullWidth className={classes.margin} variant="outlined" disabled>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">Bs.</InputAdornment>}
              labelWidth={60}
              value={30}
            />
          </FormControl>
          <Button className={classes.joinButton} type="submit" color="primary" variant="contained" disabled={false}>
            Crear
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
