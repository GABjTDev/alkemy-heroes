import { useFormik } from 'formik';
import { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";

// Context
import ConnectContext from '../context/ConnectContext';

const validate = values => {

    const errors = {};

    if (!values.email) {
        errors.email = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.pass) {
        errors.pass = 'Pass Required';
    }

    return errors;
}

const LoginPage = () => {

    const { LoginAcc, auth } = useContext(ConnectContext);
    let history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: '',
            pass: ''
        },
        validate,
        onSubmit: values => {

            if (values.email !== 'challenge@alkemy.org' && values.email !== 'gabriel@alkemy.org') {
                alert('Email incorrecto');
            }

            if (values.pass !== 'react') {
                alert('Contraseña incorrecta');
            }

            if (values.email === 'challenge@alkemy.org' && values.pass === 'react') {
                LoginAcc(values.email, values.pass);
            }

            if (values.email === 'gabriel@alkemy.org' && values.pass === 'react') {
                LoginAcc(values.email, values.pass);
            }

        }
    });

    useEffect(() => {

        if (localStorage.getItem('token')) {
            history.push('/home');
        }

    }, [auth])


    return (
        <div className="card m-auto p-3" style={{ maxWidth: '30rem' }}>
            <div className="card-body">
                <h5 className="card-title mb-3">Login</h5>
                <form className="mb-3" onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            autoComplete="off"
                        />
                        <p style={{ height: "20px", color: "red" }}>
                            {formik.errors.email ? <span>{formik.errors.email}</span> : null}
                        </p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="pass"
                            onChange={formik.handleChange}
                            value={formik.values.pass}
                            autoComplete="off"
                        />
                        <p style={{ height: "20px", color: "red" }}>
                            {formik.errors.pass ? <span>{formik.errors.pass}</span> : null}
                        </p>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
