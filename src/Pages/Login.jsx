import React, { useState , useEffect } from 'react';
import {onAuthStateChanged ,signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import '../scss/login.scss';

const Login = () => {

    const [loginEmail , setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");

    const [user , setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                console.log("user is not signed in");
                setUser({});
            }
        });
    }, [])

    const login = async (e) => {
        e.preventDefault();

        try {
            const user = await signInWithEmailAndPassword(auth , loginEmail , loginPass);
            console.log(user);
        } catch (error) {
            console.log(`Error`, error.message);
        }
    }

    return (
        <div className="">
            <div className="row">
                <div className="mt-5 mx-auto col-6 border rounded-3 shadow">
                    <p className='text-center'>Current user = {user?.email}</p>
                    <form className='mx-3 my-5' onSubmit={login}>
                        <h1 className='text-center mt-3 fw-bolder'>Login</h1>
                        <label htmlFor="Name" className='form-label mt-3 fw-bolder'>User Email :</label>
                        <input type="text" className='form-control' placeholder='Email...' onChange={(e) => setLoginEmail(e.target.value)} />
                        <label htmlFor="Name" className='form-label mt-3 fw-bolder'>Password :</label>
                        <input type="text" className='form-control' placeholder='Password...' onChange={(e) => setLoginPass(e.target.value)} />
                        <button className='btn btn-primary w-100 mt-5'>Login</button>
                        <div className="newUserSection mt-5 text-center">
                            <p>New Customer ? Create New Account</p>
                            <p>Forgot password? Reset Password</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login