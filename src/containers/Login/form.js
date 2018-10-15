import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {FORM_NAME} from './constants'
import {inputPassword, inputText} from '../../utils/forms/components';
import {Button} from 'react-bootstrap';

class Form extends PureComponent {

    render() {
        const {handleSubmit, pristine, submitting} = this.props;

        return (<form onSubmit={handleSubmit}>

            <Field
                name="username"
                component={inputText}
                placeholder="Username"
            />

            <Field
                name="password"
                component={inputPassword}
                placeholder="Password"
            />

            <Button
                bsStyle="primary"
                type="submit"
                disabled={pristine || submitting}>
                Login
            </Button>

        </form>);
    }
}

const validate = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Required'
    }

    if (!values.password) {
        errors.password = 'Required'
    }

    return errors;
};

Form = connect()(reduxForm({
    form: FORM_NAME,
    validate,
})(Form));

export default Form;