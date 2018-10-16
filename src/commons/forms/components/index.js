import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

export const inputText = ({input, meta, placeholder}) => {
    return <FormGroup>
        <ControlLabel htmlFor="first_name">{placeholder}</ControlLabel>
        <FormControl {...input} placeholder={placeholder}/>
        {meta.error && meta.touched && <HelpBlock className="error-message">{meta.error}</HelpBlock>}
    </FormGroup>;

};

export const inputPassword = ({input, meta, placeholder}) =>
    <FormGroup>
        <ControlLabel htmlFor="first_name">{placeholder}</ControlLabel>
        <FormControl type="password" {...input} placeholder={placeholder}/>
        {meta.error && meta.touched && <HelpBlock className="error-message">{meta.error}</HelpBlock>}
    </FormGroup>;