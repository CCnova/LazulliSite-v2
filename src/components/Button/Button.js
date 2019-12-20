import React from 'react';
import Button from '@material-ui/core/Button';
import classes from './Button.module.css';

const style = {
    backgroundColor: '#4DC0F1',
    color: 'white'
};

const button = () => {
    return(
        
            <Button style={style} size="large" variant="contained" color="inherit">Contato</Button>
    );
};


export default button;