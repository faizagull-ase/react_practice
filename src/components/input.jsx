import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { themeContext } from './ThemeContext';
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Please enter a valid email address').required('Email is required')
});

export default function Input() {
    const navigate = useNavigate();
    const theme = useContext(themeContext);
    const [isLoggedIn, setLoggedIn] = useState(false);


    return (
        <>
            <div className='input_form'>
                Input Form
                <Formik
                    initialValues={{ name: '', email: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        console.log(`Name:${values.name} Email:${values.email}`);
                        setLoggedIn(true);
                        resetForm();
                    }}
                >
                    {({ values }) => (
                        <>
                            <Form>
                                <span>
                                    <label className='input__labels' htmlFor='form_input'>Name <strong>:</strong></label>
                                    <Field className='input__field' name='name' type='text' id='form_input' placeholder='enter your name' />
                                    <ErrorMessage name='name' component='div' className='input__error' />
                                </span>
                                <span>
                                    <label className='input__labels' htmlFor='form_email'>Email <strong>:</strong></label>
                                    <Field className='input__field' name='email' type='email' id='form_email' placeholder='enter your email' />
                                    <ErrorMessage name='email' component='div' className='input__error' />
                                </span>
                                <span><button type='submit' className='input__button'>Submit to show dashboard button</button></span>
                            </Form>

                            <div className='input__text'>
                                <p>You are entering<span className='input__para'>{values.name || '[ Your Name will appear here ]'}</span> with email:<span className='input__para'>{values.email || '[ Your email will appear here ]'}</span></p>
                            </div>
                        </>
                    )}
                </Formik>
            </div>
            <div >
                <button className='nav__button' onClick={() => navigate('/')}>
                    Go to Counter Page
                </button>
                <p>Current theme stored in context is : {theme}</p>
                {isLoggedIn && <button className='nav__button' onClick={() => navigate('/conditional')}>
                    Go to dashboard
                </button>}
            </div>

        </>
    )
}
