import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/LogIn/Firebase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth();

    const emailRegistration = e => {
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
        e.preventDefault();

    }

    const emailChange = e => {
        setEmail(e.target.value)
    }

    const passwordChange = e => {
        setPassword(e.target.value);
    }

    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;

    }, [])

    const logOut = () => {
        // setIsLoading(true)
        signOut(auth)
            .then(() => { })
        // .finally(() => setIsLoading(false))
    }

    return {
        user,
        setUser,

        logOut,
        signInWithGoogle,
        emailRegistration, emailChange, passwordChange
    }
}



export default useFirebase;