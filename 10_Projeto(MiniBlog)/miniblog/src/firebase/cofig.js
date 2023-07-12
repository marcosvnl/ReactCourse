import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey:            "AIzaSyDem4EU7YAK2wvtmJdK_c65bNE6E243NzE",
  authDomain:        "miniblog-e3b08.firebaseapp.com",
  projectId:         "miniblog-e3b08",
  storageBucket:     "miniblog-e3b08.appspot.com",
  messagingSenderId: "125786167543",
  appId:             "1:125786167543:web:fa8656a8aac26b4b109bf2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }