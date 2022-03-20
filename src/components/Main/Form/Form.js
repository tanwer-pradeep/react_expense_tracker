import React from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
    const classes = useStyles();
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography align='center' varient='subtitle2' gutterBottom>
                ...
            </Typography>
        </Grid>

        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select>
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select>
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>

        <Grid item xs={6}>
            <FormControl fullWidth>
                <TextField type='number' label='Amount' fullwidth/>
            </FormControl>
        </Grid>

        <Grid item xs={6}>
            <FormControl fullWidth>
                <TextField type='date' label='Date' fullwidth/>
            </FormControl>
        </Grid>
        <Button className={classes.button} varient='outLined' color='primary' fullWidth>Create</Button>
    </Grid>
  )
}

export default Form;