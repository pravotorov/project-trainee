import React, { useState, useEffect, useContext } from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Divider, TextField, Button } from '@material-ui/core'

import Logo from '../../images/logo.png'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 3,
        },
        page: {
            height: '100%',
            width: '50% !important',
            padding: '0px !important',
            display: 'block',
        },
        media: {
            height: '50%',
            width: '50%',
        },
        paper: {
            marginTop: '40%',
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        field: {
            '& > *': {
                margin: theme.spacing(1),
                width: '90%',
                marginTop: '10px 0px 10px 0px',
            },
            'input': {
                height: '50%'

            }

        },
        but: {
            margin: '10px',
            width: '90%',
            height: '10%',
        }
    }),
);

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;


const Login = () => {

    const [credits, setCredits] = useState({
        email: '',
        password: ''
    })

    const handleEmailChange = (e: InputEvent) => {
        setCredits({...credits, email: e.target.value});
    }

    const handlePasswordChange = (e: InputEvent) => {
        setCredits({...credits, password: e.target.value});
    }

    const submit = (e:  ButtonEvent): void => {
        console.log("CREDITS", credits);
        e.preventDefault();
    }

  const classes = useStyles();

  return (
          <Grid container   spacing={2} justify = "center">
              <Grid className={classes.page} item xs={2}>
                  <Paper className={classes.paper}>
                      <img className={classes.media} src={Logo} alt="logo" />
                      <Typography gutterBottom variant="h6" component="h2">
                          Exceed-team
                      </Typography>
                      <Divider variant="middle" />

                          <form className={classes.field} noValidate autoComplete="off">
                              <TextField
                                  required
                                  id="outlined-required"
                                  label="Login"
                                  variant="outlined"
                                  onChange={handleEmailChange}
                              />
                              <TextField
                                  required
                                  id="outlined-required"
                                  label="Password"
                                  variant="outlined"
                                  onChange={handlePasswordChange}
                              />
                          </form>

                      <Divider variant="middle" />
                      <Button className={classes.but} variant="contained" color="primary" onClick={submit}>
                          Sign IN
                      </Button>
                  </Paper>
              </Grid>
          </Grid>
  )

}

export default Login
