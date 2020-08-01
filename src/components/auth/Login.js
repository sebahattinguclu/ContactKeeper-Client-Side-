import React, {useContext, useState, useEffect} from "react";
import AlertContext from "../../context/alert/AlertContext";
import AuthContext from "../../context/auth/AuthContext";

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const {setAlert} = alertContext;
    const {login, error, clearErrors, isAuthenticated} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }
        if (error === "Invalid Credentials") {
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history])


    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const {email, password} = user;


    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value

        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger')
        } else {
            login({email, password})
        }
    }

    return (
        <div className="form-container">
            <h1>Account <span className="text-primary">Login</span></h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                    />
                </div>
                <input className="btn bg-primary btn-block" type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login