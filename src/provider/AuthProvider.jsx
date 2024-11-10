import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app);


export const AuthContext = createContext(null);

const Gprovider = new GoogleAuthProvider();
const Gitprovider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading]=useState(true);

    const createUser =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile =(name,photo) =>{
        return updateProfile(auth.currentUser, {
             displayName: name,
          photoURL: photo
           })
     }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const SignG=()=>{
        setLoading(true);
        return signInWithPopup(auth,Gprovider);
    }
    const signGithub =() =>{
        setLoading(true);
        return signInWithPopup(auth,Gitprovider);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser =>{
            console.log('user in the auth state changed',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const userInfo ={
        user,
        loading,
        createUser,
        signIn,
        SignG,
        signGithub,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
          
          {children}

        </AuthContext.Provider>
            
       
    );
};

export default AuthProvider;