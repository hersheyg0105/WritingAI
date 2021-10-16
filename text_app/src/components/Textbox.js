import React from 'react';


const Textbox = props => {
    return <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>;
};

export default Textbox;