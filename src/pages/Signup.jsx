import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Signup = () => {
  const [error,setError]=useState('')
  const [show,setShow]=useState(false)
  function handlesubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    setError('')
    if(!terms){
      setError('accept terms and condition')
      return

    }
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        sendEmailVerification(auth.currentUser)
        .then((error) => {
          console.log(error)
        })
      })
      .catch((error) => {
       setError(error.message)
      });
  }
  return (
    <div>
      <form
        onSubmit={handlesubmit}
        className="flex flex-col"
      >
        <div className="mx-auto my-5">

        <label className="input validator my-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            name="email"
            type="email"
            placeholder="mail@site.com"
            className=""
            required
          />
        </label>
        <div className="validator-hint hidden my-5">Enter valid email address</div>

        <div className="relative">
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            
            <input
              name="password"
              type={show ? "text" : "password"}
              required
              placeholder="Password"
              className="pr-6"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <button type="button" onClick={()=>setShow(!show)}  className="z-20 absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600">
           {show?<FaEyeSlash />:<FaEye />}
          </button>
        </div>
        <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />
          At least one number <br />
          At least one lowercase letter <br />
          At least one uppercase letter
        </p>
          <div>
          <label className="label">
    <input type="checkbox" name="terms" className="checkbox" />
    Accept terms and conditon
  </label>
<p className="text-sm text-red-500">{error}</p>
        <button type="submit" className="btn btn-primary mt-4">
          Sign up
        </button>
          </div>
          </div>

      </form>
      <div>
        <h1 className="mx-auto text-center mb-20">Already have an accout <Link className="link" to='/login'>Log in </Link> </h1>
      </div>
    </div>
  );
};

export default Signup;
