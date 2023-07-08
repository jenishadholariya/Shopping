import React from 'react';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import { Form, Formik, useFormik } from 'formik';

function Register(props) {
    let schema = yup.object().shape({
        name:yup.string().required("Enter your name"),
        email: yup.string().required("Enter your email").email("enter your email"),
        password: yup.string().required("Enter your password")
    });

    const formik = useFormik({
        initialValues: {
            name:'',
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, handleSubmit, handleBlur, errors, touched } = formik;
    return (
        <div>
            <div>
                <div className="container-fluid bg-secondary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 300 }}>
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">Register</h1>
                        <div className="d-inline-flex">
                            <p className="m-0"><NavLink to="/">Home</NavLink></p>
                            <p className="m-0 px-2">-</p>
                            <p className="m-0">Contact</p>
                        </div>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Contact Start */}
                <div className="container-fluid pt-5">
                    <div className="text-center mb-4">
                        <h2 className="section-title px-5"><span className="px-2">Log In For Any Queries</span></h2>
                    </div>
                    <div className="row px-xl-5 justify-content-center">
                        <div className="col-lg-5 mb-5">
                            <div className="contact-form">
                                <div id="success" />
                                <Formik values={formik}>
                                    <Form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={handleSubmit}>
                                    <div className="control-group">
                                            <input
                                                type="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your name"
                                                required="required"
                                                data-validation-required-message="Please enter your name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <p className="help-block text-danger">{errors.name && touched.name ? errors.name : ''}</p>
                                        </div>
                                        <div className="control-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Your Email"
                                                required="required"
                                                data-validation-required-message="Please enter your email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <p className="help-block text-danger">{errors.email && touched.email ? errors.email : ''}</p>
                                        </div>
                                        <div className="control-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Your password"
                                                required="required"
                                                data-validation-required-message="Please enter your password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <p className="help-block text-danger">{errors.password && touched.password ? errors.password : ''}</p>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">
                                                Register</button>
                                        </div>
                                    </Form>
                                </Formik>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;