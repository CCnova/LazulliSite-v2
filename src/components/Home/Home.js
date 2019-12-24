import React from 'react';
import classes from './Home.module.css';
import Container from '@material-ui/core/Container';
import MyButton from '../Button/Button';
import logo from '../../assets/img/lazulilogo7.jpg';

//PROBLEMAS: Mudar tom do azul, muito claro e colocar cartao branco transparente


const home = () => {
    return(
        <div className={`${classes.home}`}>
            <Container className={classes.centerText} maxWidth='lg'>
                <img className={classes.responsiveImg} src={logo} alt="logo" />
            </Container>
    
            <Container className={`${classes.alignTextLeft} ${classes.textBox}`} maxWidth="sm">
                <h1 className={`${classes.lightBlue} ${classes.descript}`}>Exemplo Texto</h1>
                <p className={`${classes.white} ${classes.secondText}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor nisi quam, non consectetur justo auctor non. Curabitur nisl lorem, fringilla quis ligula sit amet, hendrerit sodales mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris a ex mi. Proin in placerat erat, et sollicitudin mauris.
                </p>
                <MyButton content="Contato" />
            </Container>
        </div>
    );
};

export default home;