import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFmW8uEF7vqOBpVTBuN7EdxgPFYpSrrDQ",
  authDomain: "admin-tareas-49f64.firebaseapp.com",
  projectId: "admin-tareas-49f64",
  storageBucket: "admin-tareas-49f64.appspot.com",
  messagingSenderId: "180088159977",
  appId: "1:180088159977:web:abf640399e528045dcfa78",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
