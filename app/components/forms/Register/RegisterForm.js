import React, {Component} from 'react';
import {TouchableHighlight} from 'react-native';

import {Field, reduxForm} from 'redux-form';
import {Button, Container, Form, Input, Item, Label, Text} from 'native-base';
import styles from './styles'

const validate = values => {
    const error = {
        name: '' ,
        email: '' ,
        phone: ''
    }

    let name = values.name === undefined ? '' : values.name
    let email = values.email === undefined ? '' : values.email
    let phone = values.phone === undefined ? '' : values.phone

    if(!name || name.length === 0 || name === ''){
        error.name = 'Full name is required.';
    }

    if(!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        error.email = 'Email address is invalid.';
    }

    if(!phone || !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,5}$/i.test(phone)){
        error.phone = 'Phone number is invalid.';
    }

    return error;
};

class RegisterForm extends Component{
    constructor(props) {
        super(props);

        this.renderInput = this.renderInput.bind(this);
    }

    renderInput({ input, label, type, meta: { touched, error, warning, active } }){
        let keyboard = 'default';
        if (type === 'email') {
            keyboard = 'email-address';
        } else if ( type === 'phone' ) {
            keyboard = 'phone-pad';
        }
        return (
            <Item style={[styles.item, (!error && touched) || active ? styles.itemSuccess : null, touched && error ? styles.itemError : null]} floatingLabel error={touched && error ? true : false} success={touched && !error ? true : false}>
                <Label>{label}</Label>
                <Input style={styles.input} keyboardType={keyboard} {...input}/>
                { touched && error ? <Text style={styles.error}>{ error }</Text> : <Text /> }
            </Item>
        )
    }

    render() {
        const { submitting, pristine } = this.props

        return (
            <Container style={styles.container}>
                <Form style={styles.form}>
                    <Field label={'Full name'} name={"name"} component={this.renderInput} />
                    <Field label={'Email address'} name={"email"} type="email" component={this.renderInput} />
                    <Field label={'Phone number'} name={"phone"}  type="phone" component={this.renderInput} />
                    <TouchableHighlight>
                        <Button style={styles.submit} full light disabled={pristine || submitting} onPress={this.props.handleSubmit.bind(this)}>
                            <Text uppercase={false} style={[styles.btnText, submitting || pristine ? styles.btnTextDisabled : null]}> Setup PIN </Text>
                        </Button>
                    </TouchableHighlight>
                </Form>
            </Container>
        )
    }
}

export default reduxForm({
    form: 'register',
    validate
})(RegisterForm);


