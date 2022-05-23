import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

export const UserContext = createContext()

const UserProvider = (props) => {

  const [user, setUser] = useState(false);
  const registerUser = (email, pass)=> createUserWithEmailAndPassword(auth, email, pass)
  const loginUser = (email, pass) => signInWithEmailAndPassword(auth, email, pass)
  const signOutUser = () => signOut(auth)
  // onAuthStateChanged

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, user =>{
      console.log(user)
      if (user){
        const { email, photoURL, displayName, uid } = user
        setUser({email, photoURL, displayName, uid})
      }else{
        setUser(null)
      }
    })
    return ()=> unsuscribe()
  }, []);



  return (
    <UserContext.Provider value={{user, setUser, registerUser, loginUser, signOutUser}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
