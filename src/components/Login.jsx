import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const githubprovider = new GithubAuthProvider();
  const xprovider = new TwitterAuthProvider();
  const [name,setName]=useState(null)
  const [photo,setPhoto]=useState(null)
  function handleClick() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setName(result.user.displayName)
        setPhoto(result.user.photoURL)
      })
      .then((error) => console.log(error));
    console.log("done");
  }
  function handlesignout() {
    signOut(auth)
      .then(() => {
        setUser(null);
        setName(null)
        setPhoto(null)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  
  function handlegithub() {
    signInWithPopup(auth,githubprovider)
    .then(result=>{
      console.log(result)
      setUser(result.user)
      setName(result.user.displayName
      )
        setPhoto(result.user.photoURL)
      
    })
    .catch(error=>{
      console.log(error)
    })

  }
  function handlex() {
    signInWithPopup(auth,xprovider)
    .then(result=>{
     
      console.log(result._tokenResponse)
      setUser(result._tokenResponse)
      setName(result._tokenResponse.displayName
      )
        setPhoto(result._tokenResponse.photoUrl)
      
    })
    .catch(error=>{
      console.log(error)
    })

  }
  return (
    <div className="flex justify-center items-center mx-auto container gap-5">
      <h1>login </h1>
      {user ? (
        <button
          onClick={handlesignout}
          className="px-1 py-2 rounded-sm bg-teal-400"
        >
          sign out
        </button>
      ) : (
        <div>
          <button
            onClick={handleClick}
            className="px-1 py-2 rounded-sm bg-teal-400"
          >
            log in with google
          </button>
          <button
            onClick={handlegithub}
            className="px-1 py-2 rounded-sm bg-teal-400"
          >
            log in with github
          </button>
          <button
            onClick={handlex}
            className="px-1 py-2 rounded-sm bg-teal-400"
          >
            log in with x
          </button>
        </div>
      )}

      {user && (
        <div className="flex flex-col">
          <h1>{name}</h1>
          <img referrerPolicy="no-referrer" src={photo} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
