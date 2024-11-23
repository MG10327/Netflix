// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { toast, ToastContainer } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAZQ6X-zad2AK_QWVafRJnWPZhFKCVR7HE",
  authDomain: "netflix-55477.firebaseapp.com",
  projectId: "netflix-55477",
  storageBucket: "netflix-55477.firebasestorage.app",
  messagingSenderId: "891338665362",
  appId: "1:891338665362:web:f8056840eccb4219cbe54b",
  measurementId: "G-259ZLB753K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        const response =await createUserWithEmailAndPassword(auth, email, password)

        const user = response.user
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name: name,
            authProvider: "local",
            email: email
        })
    } catch(error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async (email, password) => {
    try {
       await signInWithEmailAndPassword(auth, email, password)
    } catch(error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = () => {
    signOut(auth)
}

export {auth, db, login, signup, logout}