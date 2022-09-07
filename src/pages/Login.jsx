import React, {useContext} from 'react';
import MyInput from "../Components/UI/Inputs/MyInput";
import MyButton from "../Components/UI/Buttons/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Login page</h1>
            <form action="" onSubmit={login}>
                <MyInput type='text' placeholder="Login"/>
                <MyInput type='password' placeholder="Password"/>
                <MyButton>Log in</MyButton>
            </form>
        </div>
    );
};

export default Login;