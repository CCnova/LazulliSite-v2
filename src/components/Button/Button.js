import React from 'react';
import Button from '@material-ui/core/Button';



const button = (props) => {
    const style = {
        backgroundColor: `${props.btnColor}`,
        color: 'white',
        fontSize: "25px"
    };
    
    return(
        
            <Button style={style} size="large" variant="contained" color="inherit">{props.content}</Button>
    );
};


export default button;