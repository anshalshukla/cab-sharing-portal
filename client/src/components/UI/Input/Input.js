import React from 'react';

import classes from './Input.module.css';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.InputField];
    const labelClasses = [classes.InputLabel];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.InvalidField);
        labelClasses.push(classes.InvalidLabel);
    }

    inputElement = <div className={classes.InputDiv}>
            <label className={labelClasses.join(' ')}>{props.label}</label>
            <input 
                type = {props.elementType}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
        </div>;
    

    return inputElement


};

export default input;
