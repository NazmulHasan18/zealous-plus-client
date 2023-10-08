import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   sendEmailVerification,
   sendPasswordResetEmail,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateEmail,
   updatePhoneNumber,
   updateProfile,
} from "firebase/auth";
import axios from "axios";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const auth = getAuth(app);

// component Auth Provider Here

const AuthProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState(null);

   //    google login
   const googleProvider = new GoogleAuthProvider();

   const googleLogin = () => {
      return signInWithPopup(auth, googleProvider);
   };

   //  Email Pass login

   const emailPassSignUp = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };
   const emailPassSignIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   //    update user
   const updateUser = (data) => {
      const { name, photoUrl } = data;
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photoUrl,
      });
   };

   // todo: update mobile number
   const updateMobileNumber = (number) => {
      return updatePhoneNumber(auth.currentUser, { phoneNumber: number });
   };

   // update Email
   const updateNewEmail = (email) => {
      return updateEmail(auth.currentUser, email);
   };

   //    reset password

   const resetPassword = (email) => {
      return sendPasswordResetEmail(auth, email);
   };

   // verify email
   const verifyEmail = () => {
      sendEmailVerification(auth.currentUser).then(() => {
         Swal.fire({
            position: "center",
            icon: "success",
            title: `Please check your email. Verify Email sent`,
            showConfirmButton: false,
            timer: 1000,
         });
      });
   };

   // !log out function

   const logOut = () => {
      return signOut(auth);
   };

   // Monitoring User Here

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
         setUser(loggedUser);
         console.log(loggedUser);
         if (loggedUser) {
            axios
               .post("https://zealous-plus-server-d50zfrkhy-nazmulhasan18.vercel.app/jwt", {
                  email: loggedUser.email,
               })
               .then((response) => {
                  localStorage.setItem("jwt-token", response.data);
               });
         } else {
            localStorage.removeItem("jwt-token");
         }
         setLoading(false);
      });
      return () => unsubscribe();
   }, []);

   //    All are exporting from here
   const authContext = {
      user,
      loading,
      setLoading,
      googleLogin,
      emailPassSignUp,
      emailPassSignIn,
      updateUser,
      resetPassword,
      logOut,
      verifyEmail,
      updateMobileNumber,
      updateNewEmail,
   };

   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
