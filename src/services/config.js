import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBquMn5_U4Rpy0fsEvpX64ojhCIm1U44yk",
  authDomain: "mythic-plus-coder.firebaseapp.com",
  projectId: "mythic-plus-coder",
  storageBucket: "mythic-plus-coder.appspot.com",
  messagingSenderId: "851433769080",
  appId: "1:851433769080:web:ce9c936d079d1a9d09458d"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);