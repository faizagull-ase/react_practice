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
            <div className='flex flex-col justify-center items-center p-8 font-extrabold italic'>
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
                            <Form className='flex flex-col justify-center items-center mt-8'>
                                <span className='m-2'>
                                    <label className='p-4' htmlFor='form_input'>Name <strong>:</strong></label>
                                    <Field className='p-4' name='name' type='text' id='form_input' placeholder='enter your name' />
                                    <ErrorMessage name='name' component='div' className='text-red-500' />
                                </span>
                                <span className='m-2'>
                                    <label className='p-4' htmlFor='form_email'>Email <strong>:</strong></label>
                                    <Field className='p-4' name='email' type='email' id='form_email' placeholder='enter your email' />
                                    <ErrorMessage name='email' component='div' className='text-red-500' />
                                </span>
                                <span className='m-2'><button type='submit' className='mt-4 py-1 px-4 border-2 border-black bg-[var(--primary-color)] hover:bg-[var(--hover-color)] cursor-pointer'>Submit to show dashboard button</button></span>
                            </Form>

                            <div className='not-italic font-normal'>
                                <p>You are entering<span className='font-bold italic'>{values.name || '[ Your Name will appear here ]'}</span> with email:<span className='font-bold italic'>{values.email || '[ Your email will appear here ]'}</span></p>
                            </div>
                        </>
                    )}
                </Formik>
            </div>
            <div >
                <button className='ml-12 mt-12 border-2 border-black bg-[var(--primary-color)] hover:bg-[var(--hover-color)] px-2 py-4 font-extrabold cursor-pointer' onClick={() => navigate('/')}>
                    Go to Counter Page
                </button>
                <p className='ml-12 mt-12'>Current theme stored in context is : {theme}</p>
                {isLoggedIn && <button className='ml-12 mt-1 ml-4 border-2 border-black bg-[var(--primary-color)] hover:bg-[var(--hover-color)] px-2 py-4 font-extrabold cursor-pointer' onClick={() => navigate('/conditional')}>
                    Go to dashboard
                </button>}
            </div>

        </>
    )
}
