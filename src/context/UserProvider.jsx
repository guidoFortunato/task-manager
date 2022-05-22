import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase";

export const UserContext = createContext()

const UserProvider = (props) => {

  const [user, setUser] = useState(false);
  const registerUser = (email, pass)=> createUserWithEmailAndPassword(auth, email, pass)
  const loginUser = (email, pass) => signInWithEmailAndPassword(auth, email, pass)


  return (
    <UserContext.Provider value={{user, setUser, registerUser, loginUser}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
