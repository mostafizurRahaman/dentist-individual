import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.Config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'; 

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(); 

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null); 
   const [loading, setLoading] = useState(true); 
   
   const createUser = (email, password) => {
      setLoading(true); 
      return createUserWithEmailAndPassword(auth, email, password); 
   }
   const LogIn =(email ,password) => {
      setLoading(true); 
      return signInWithEmailAndPassword(auth, email, password); 
   }
   const LogOut = () =>{
      setLoading(true); 
      return signOut(auth); 
   }

  const GoogleSignIn = () => {
   setLoading(true); 
   return signInWithPopup(auth ,googleProvider); 
  }

  const GithubSignIn = () => {
   setLoading(true); 
   return signInWithPopup(auth, githubProvider); 
  }

  const addInfo = (profile) => {
   setLoading(true); 
      return updateProfile(auth.currentUser, profile); 
  }

  useEffect(()=>{
   const mount = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false); 
      console.log(currentUser);
   })

   return ()=>{
      mount(); 
   }

  }, [])
   const authInfo = {createUser, LogIn, LogOut, GoogleSignIn, GithubSignIn, addInfo, user, loading}
   return (
    <AuthContext.Provider value={authInfo}>
            {children}
    </AuthContext.Provider>
   );
};

export default AuthProvider;