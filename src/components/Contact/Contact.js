import React from 'react';
import classes from './Contact.module.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const contact = () => {
    return(
        <Container className={classes.contact} maxWidth="xs">
            <Grid container direction='column' justify='center' alignItems='center' spacing={3}>
                <Grid item >
                    <h1 className={`${classes.lightBlue} ${classes.centerText}`}>Fale com a gente!</h1>
                </Grid>
                <Grid item>
                    <h2 className={classes.lightBlue}>Telefone:</h2>
                    <p className={classes.blackColor}>(71) 99148-5263</p>
                    <p className={classes.blackColor}>(71) 99653-0199</p>
                </Grid>

                <Grid item>
                    <h2 className={classes.lightBlue}>Email:</h2>
                    <p className={classes.blackColor}>lazulidp@gmail.com</p>
                </Grid>
            </Grid>
        </Container>
    );
};

export default contact;