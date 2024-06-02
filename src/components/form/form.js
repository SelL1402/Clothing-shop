import {Formik, Form, ErrorMessage as FormikErrorMessage, useField} from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return(
        <>
            <label className="personal-account-page-content-tab-wrapper-personal-data-col-row-label" htmlFor={props.name}>{label}</label>
            <input className='personal-account-page-content-tab-wrapper-personal-data-col-row-input' {...props} {...field}/>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
}

const FormRegistration = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [dateBirthday, setDateBirthday] = useState('');
    const [number, setNumber] = useState('');
    const [surname, setSurname] = useState('');
    const [sex, setSex] = useState('');
    const [newPassword, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const onSetValues = ({email, name, dateBirthday, number, surname, sex, newPassword, confirm}) => {
        setEmail(email);
        setName(name);
        setDateBirthday(dateBirthday);
        setNumber(number);
        setSurname(surname);
        setSex(sex);
        setPassword(newPassword);
        setConfirm(confirm);
    }


    return(
        <Formik
            initialValues={{
                email: '',
                name: '',
                dateBirthday: '',
                number: '',
                surname: '',
                sex: '',
                newPassword: '',
                confirm: ''
            }}
            validateSchema = {Yup.object({
                email: Yup.string()
                        .email("Incorrect address")
                        .required('This field is required'),
                name: Yup.string()
                        .min(2, "Minimum 2 simbol")
                        .required('This field is required'),
                dateBirthday: Yup.date()
                        .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
                        .required('This field is required'),
                number: Yup.number()
                        .min(5, "Minimum 5 simbol")
                        .required('This field is required'),
                surname: Yup.string()
                        .min(2, "Minimum 2 simbol")
                        .required('This field is required'),
                sex: Yup.string()
                        .min(2, "Minimum 2 simbol")
                        .required('This field is required'),
                newPassword: Yup.string()
                        .min(8, "Minimum 8 simbol")
                        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
                confirm: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match' )
            })}
            onSubmit={values => onSetValues(values)}>
            <Form className="personal-account-page-content-tab-wrapper-form">
                <div className="personal-account-page-content-tab-wrapper-personal-data">
                    <div className="personal-account-page-content-tab-wrapper-personal-data-col">
                        <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                            <MyTextInput
                                label="E-mail"
                                id="email"
                                name="email"
                                type="text"/>
                            <FormikErrorMessage className='error' name="email" component="div"/>
                        </div>
                        <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                            <MyTextInput
                                label="Name"
                                id="name"
                                name="name"
                                type="text"/>
                            <FormikErrorMessage className='error' name="name" component="div"/>
                        </div>
                        <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                            <MyTextInput
                                label="Date-birthday"
                                id="dateBirthday"
                                name="dateBirthday"
                                type="date"/>
                            <FormikErrorMessage className='error' name="dateBirthday" component="div"/>
                        </div>
                        <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                            <MyTextInput
                                label="Number phone"
                                id="number"
                                name="number"
                                type="number"/>
                            <FormikErrorMessage className='error' name="number" component="div"/>
                        </div>
                    </div>
                    <div className="personal-account-page-content-tab-wrapper-personal-data-col">
                        <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                            <MyTextInput
                                label="Surname"
                                id="surname"
                                name="surname"
                                type="surname"/>
                            <FormikErrorMessage className='error' name="surname" component="div"/>
                        </div>
                        <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                            <MyTextInput
                                label="Sex"
                                id="sex"
                                name="sex"
                                type="sex"/>
                            <FormikErrorMessage className='error' name="sex" component="div"/>
                        </div>
                    </div>
                    <button type='submit' className="personal-account-page-content-tab-wrapper-form-button">Confirm</button>
                </div>
                <div className="personal-account-page-content-tab-wrapper-password">
                    <div className="personal-account-page-content-tab-wrapper-password-title">Password</div>
                    <div className="personal-account-page-content-tab-wrapper-password-col">
                        <div className="personal-account-page-content-tab-wrapper-password-col-row">
                            <MyTextInput
                                label="New Password"
                                id="password"
                                name="password"
                                type="password"/>
                            <FormikErrorMessage className='error' name="password" component="div"/>
                        </div>
                        <div className="personal-account-page-content-tab-wrapper-password-col-row">
                            <MyTextInput
                                label="Confirm the new password"
                                id="confirm"
                                name="confirm"
                                type="confirm"/>
                            <FormikErrorMessage className='error' name="confirm" component="div"/>
                        </div>
                    </div>
                </div>
            </Form>    
        </Formik>
    )
}

export default FormRegistration;