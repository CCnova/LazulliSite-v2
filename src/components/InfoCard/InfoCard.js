import React from 'react';
import classes from './InfoCard.module.css';
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import MyButton from '../Button/Button';



const infoCard = (props) => {
    // let buttonArea = '';

    // if(props.haveBtn) {
    //     buttonArea = <CardActionArea><MyButton content={props.btnContent} /></CardActionArea>
    // }

    return(
        <Card>
            <CardActionArea>
                <CardMedia className={`${classes.media}`} component="img"
                alt={props.imgAlt} image={props.imgSrc} title="Servico1" 
                style={props.media}
                />
                <CardContent>
                    <h1>{props.cardTitle}</h1>
                    {props.textContent}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default infoCard;