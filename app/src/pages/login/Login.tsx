import React, { useState, useEffect, useContext } from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import Logo from '../../images/logo.png'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        media: {
            paddingTop: '100%', // 16:9
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        field: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        }
    }),
);

const Login = () => {

  const classes = useStyles();

  return (
      <div className={classes.root}>
          <Grid container spacing={3} justify = "center">
              <Grid item xs={4}>
                  <Paper className={classes.paper}>

                      <CardMedia
                          className={classes.media}
                          image={Logo}
                          title="Paella dish"
                      />
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
                              />
                              <TextField
                                  required
                                  id="outlined-required"
                                  label="Password"
                                  variant="outlined"
                                />
                          </form>

                      <Divider variant="middle" />
                      <Button variant="contained" color="primary">
                          Sign IN
                      </Button>
                  </Paper>

              </Grid>

          </Grid>
      </div>
  )

}

export default Login
