import { useState } from 'react';
import {Formik, Form, ErrorMessage as FormikErrorMessage, useField} from 'formik';
import * as Yup from 'yup';
import './form.scss'

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return(
        <>
            <label className="form-row-label" htmlFor={props.name}>{label}</label>
            <input className='form-row-input' {...props} {...field}/>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
}

const FormAuth = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const sendData = () => {
        handleClick(email, pass)
    }

    return(
        <Formik
            initialValues={{
                email: '',
                pass: ''
            }}
            validateSchema = {Yup.object({
                email: Yup.string()
                    .email("Incorrect address")
                    .required('This field is required'),
                pass: Yup.string()
                        .required('This field is required')
            })}
            onSubmit={(values) => handleClick(values.email, values.pass)}>
            <Form className='form'>
                <div className="form-row">
                    <MyTextInput
                        label="Your email"
                        id="email"
                        name="email"
                        type="text"
                        onChange={(e) => {
                            setEmail(e.target.value)}}/>
                </div>
                <div className="form-row">
                    <MyTextInput
                        label="Password"
                        id="pass"
                        name="pass"
                        type="password"
                        onChange={(e) => {
                            setPass(e.target.value)}}/>
                </div>
                <button className='form-button' type="submit">{title}</button>
            </Form>
        </Formik>
    )
}

export default FormAuth;