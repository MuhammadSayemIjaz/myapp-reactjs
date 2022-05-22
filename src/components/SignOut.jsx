import React from 'react'
import {signOut} from 'firebase/auth';
import {auth} from '../config/firebase';

const SignOut = () => {
    const logout = async() => {
        await signOut(auth);
        }
  return (
    <div>
        <button className='btn btn-primary' onClick={logout}>Sign Out user</button>
    </div>
  )
}

export default SignOut