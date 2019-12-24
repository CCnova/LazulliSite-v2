import React from 'react';
import classes from './Services.module.css';
import Grid from '@material-ui/core/Grid';
import InfoCard from '../InfoCard/InfoCard';
import img1 from '../../assets/img/aboutBack.jpg';
import { Container } from '@material-ui/core';

const services = () => {
    return(
        <Container className={`${classes.lightBackground} ${classes.servicesScreen}`} fixed maxWidth="lg">
            <h1 className={`${classes.services} ${classes.lightBlue} ${classes.centerText}`}>Servicos</h1>
            <Grid container direction='row' justify='center' alignItems='center' spacing={3}>
                <Grid className={classes.centerText} item>
                    <InfoCard imgSrc={img1} imgAlt="img1" textContent="Servico 1" cardTitle="Servico 1"
                    haveBtn={true} btnContent="Fazer Orcamento" />
                </Grid>
                <Grid className={classes.centerText} item>
                    <InfoCard imgSrc={img1} imgAlt="img1" textContent="Servico 1" cardTitle="Servico 1" haveBtn={true} btnContent="Fazer Orcamento"/>
                </Grid>
                <Grid className={classes.centerText} item>
                    <InfoCard imgSrc={img1} imgAlt="img1" textContent="Servico 1" cardTitle="Servico 1" haveBtn={true} btnContent="Fazer Orcamento" />
                </Grid>
                <Grid className={classes.centerText} item>
                    <InfoCard imgSrc={img1} imgAlt="img1" textContent="Servico 1" cardTitle="Servico 1" haveBtn={true} btnContent="Fazer Orcamento"/>
                </Grid>
                <Grid className={classes.centerText} item>
                    <InfoCard imgSrc={img1} imgAlt="img1" textContent="Servico 1" cardTitle="Servico 1" haveBtn={true} btnContent="Fazer Orcamento"/>
                </Grid> 
                <Grid className={classes.centerText} item>
                    <InfoCard imgSrc={img1} imgAlt="img1" textContent="Servico 1" cardTitle="Servico 1" haveBtn={true} btnContent="Fazer Orcamento"/>
                </Grid>
            </Grid>

        </Container>
    );
};



export default services;