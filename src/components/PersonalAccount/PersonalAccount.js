import './PersonalAccount.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Formik, Form, Field, ErrorMessage as FormikErrorMessage, useField} from 'formik';
import * as Yup from 'yup';

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

const PersonalAccount = () => {


    return(
        <div className="personal-account-page">
            <div className="personal-account-page-content">
                <Tabs
                defaultActiveKey="account"
                id="uncontrolled-tab-example"
                className="personal-account-page-content-tab-wrapper border-0"
                fill
                >
                    <Tab eventKey="account" className="tab border" title={<span className="personal-account-page-content-tab-wrapper-title">My account</span>}>
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
                            onSubmit={values => console.log(values, null, 2)}>
                            <Form className="personal-account-page-content-tab-wrapper-form">
                                <div className="personal-account-page-content-tab-wrapper-personal-data">
                                    <div className="personal-account-page-content-tab-wrapper-personal-data-col">
                                        <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                                            <MyTextInput
                                                label="E-mail"
                                                id="email"
                                                name="email"
                                                type="text"/>
                                        </div>
                                        <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                                            <MyTextInput
                                                label="Name"
                                                id="name"
                                                name="name"
                                                type="text"/>
                                        </div>
                                        <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                                            <MyTextInput
                                                label="Date-birthday"
                                                id="dateBirthday"
                                                name="dateBirthday"
                                                type="date"/>
                                        </div>
                                        <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                                            <MyTextInput
                                                label="Number phone"
                                                id="number"
                                                name="number"
                                                type="number"/>
                                        </div>
                                    </div>
                                    <div className="personal-account-page-content-tab-wrapper-personal-data-col">
                                        <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                                            <MyTextInput
                                                label="Surname"
                                                id="surname"
                                                name="surname"
                                                type="surname"/>
                                        </div>
                                        <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                                            <MyTextInput
                                                label="Sex"
                                                id="sex"
                                                name="sex"
                                                type="sex"/>
                                        </div>
                                    </div>
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
                                        </div>
                                        <div className="personal-account-page-content-tab-wrapper-password-col-row">
                                            <MyTextInput
                                                label="Confirm the new password"
                                                id="confirm"
                                                name="confirm"
                                                type="confirm"/>
                                        </div>
                                    </div>
                                </div>
                                <button type='submit' className="personal-account-page-content-tab-wrapper-form-button">Confirm</button>
                            </Form>    
                        </Formik>
                    </Tab>
                    <Tab eventKey="orders" className="tab border" title={<span className="personal-account-page-content-tab-wrapper-title">My orders</span>}>
                        Orders
                    </Tab>
                    <Tab eventKey="support" className="tab border" title={<span className="personal-account-page-content-tab-wrapper-title">Support</span>}>
                        Tab content for Contact
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
export default PersonalAccount;