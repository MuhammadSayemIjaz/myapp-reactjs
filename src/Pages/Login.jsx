import React, { useState , useEffect } from 'react';
import {onAuthStateChanged ,signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import { toast } from "react-toastify";
import { NavLink ,useNavigate } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate();

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

    const login = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, loginEmail, loginPass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                toast.success('User has been logged in!', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigate('/');  
                // ...
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.message, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }

    return (
        <>
            <div className="container">
                <div className="mt-5 mx-auto col-lg-4 col-md-8 col-sm-11 border rounded-3 shadow">
                    {/* <p className='text-center'>Current user = {user?.email}</p> */}
                    <form className='mx-5 my-5' onSubmit={login}>
                        <h1 className='text-center mt-3 fw-bolder'>Login</h1>
                        <label htmlFor="Name" className='form-label mt-3 fw-bolder'>User Email :</label>
                        <input type="text" className='form-control' placeholder='Email...' onChange={(e) => setLoginEmail(e.target.value)} />
                        <label htmlFor="Name" className='form-label mt-3 fw-bolder'>Password :</label>
                        <input type="text" className='form-control' placeholder='Password...' onChange={(e) => setLoginPass(e.target.value)} />
                        <button className='btn btn-primary w-100 mt-5'>Login</button>
                        <div className="newUserSection mt-5 text-center">
                            <p>New Customer ? <NavLink to={"/SignUp"} style={{
                                textDecoration: "none",
                                color: "blue",
                    
                            }}>Create New Account</NavLink></p>
                            
                            <p>Forgot password? Reset Password</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login