import React from 'react';
import Aux from '../../hoc/Aux';
import TopBar from '../TopBar/TopBar';
import MyFooter from '../Footer/Footer';

const layout = (props) => { 
    return (
        <Aux>
            <TopBar />
            {props.children}
            <MyFooter />
        </Aux>
    );
};

export default layout;