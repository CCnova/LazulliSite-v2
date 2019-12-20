import React from 'react';

const navLink = (props) => { 
    return (
        <a className="nav-link" href={props.to}>
            {props.content}
        </a>
    );
};


export default navLink;