import React from 'react';
import Button from '@material-ui/core/Button';


const style = {
    backgroundColor: 'rgba(77,192,241, 0.7)',
    color: 'black',
    fontSize: "25px"
};

const button = (props) => {
    return(
        
            <Button style={style} size="large" variant="contained" color="inherit">{props.content}</Button>
    );
};


export default button;