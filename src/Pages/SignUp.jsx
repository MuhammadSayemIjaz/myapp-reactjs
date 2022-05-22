import React, { useState } from "react";
import "../scss/login.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../config/firebase";
import { toast } from "react-toastify";
import { collection, setDoc , doc } from "firebase/firestore/lite";
// import { serverTimestamp , setDoc } from 'firebase/firestore/lite';

const Signup = () => {
  const [states, setStates] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStates((s) => ({ ...s, [name]: value }));
  };

  const addDocsInFirestore = async (user) => {
    const collectionName = "users";
    const docsCollectionRef = collection(firestore, collectionName);
    let {
      name,
      email,
      country,
      city,
      state,
      postalCode,
      mobileNo,
    } = states;

    let formData = {
      name,
      email,
      country,
      city,
      state,
      postalCode,
      mobileNo,
    };
    console.log(formData);
    formData.uid = user.uid;
    try {
      const docRef = await setDoc(doc(docsCollectionRef, user.uid), formData);
      toast.success("User has been added!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Document written with ID: ", user.uid);
    } catch (e) {
      toast.error("Something went wrong.", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("Error adding document: ", e);
    }
  };
  const register = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, states.email, states.password)
      .then((userCredential) => {
        const user = userCredential.user;
        addDocsInFirestore(user);
        toast.success("User has been registered Successfully!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(error);
        toast.error(errorMessage, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="">
      <div className="row">
        <div className="mt-5 mx-auto col-5 col-md-8 border rounded-3 shadow">
          <form className="mx-3 my-3" onSubmit={register}>
            <div className="textSection">
              <h1 className="text-center mt-3 fw-bolder">Sign Up</h1>
            </div>
            <div className="InputSection d-flex justify-content-center flex-column mx-4">
              <div className="row">
                <div className="col">
                  <label htmlFor="Name" className="form-label mt-3 fw-bolder">
                    User Name :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name..."
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="Name" className="form-label mt-3 fw-bolder">
                    User Email :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email..."
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="Name" className="form-label mt-3 fw-bolder">
                    Password :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password..."
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="Name" className="form-label mt-3 fw-bolder">
                    Confirm Password :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Confirm Password..."
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="Name" className="form-label mt-3 fw-bolder">
                    Country :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country..."
                    name="country"
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="Name" className="form-label mt-3 fw-bolder">
                    State :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State..."
                    name="state"
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="Name" className="form-label mt-3 fw-bolder">
                    City :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City..."
                    name="city"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="Name" className="form-label mt-3 fw-bolder">
                    Postal code :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Postal Code..."
                    name="postalCode"
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="Name" className="form-label mt-3 fw-bolder">
                    Mobile No :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile No..."
                    name="mobileNo"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="buttonSection mx-4">
              <button className="btn btn-primary w-100 mt-5 ">Sign Up</button>
            </div>
            <div className="newUserSection mt-5 text-center">
              <p>Already have and Account ?</p>
              <p>Login</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
