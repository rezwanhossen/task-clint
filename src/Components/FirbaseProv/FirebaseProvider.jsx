import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);
const googlepro = new GoogleAuthProvider();
const FirebaseProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  //creat users
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logout = () => {
    return signOut(auth);
  };

  //GOOGLE LOGIN
  const googleLogin = () => {
    return signInWithPopup(auth, googlepro);
  };

  useEffect(() => {
    const unsubcrib = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      }
    });
    return () => unsubcrib();
  }, []);

  const allValu = { user, creatUser, loginUser, googleLogin, logout };
  return (
    <AuthContext.Provider value={allValu}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
