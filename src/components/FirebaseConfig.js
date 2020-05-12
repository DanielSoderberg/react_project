import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQLm6hiRJ-NAEBZAdZPUJw7YrKqfDSql0",
  authDomain: "fir-cloud-4a961.firebaseapp.com",
  databaseURL: "https://fir-cloud-4a961.firebaseio.com",
  projectId: "fir-cloud-4a961",
  storageBucket: "fir-cloud-4a961.appspot.com",
  messagingSenderId: "841389503194",
  appId: "1:841389503194:web:8f6624511c9e72a3692be3",
  measurementId: "G-6ZN0RWS7Y6",
};

firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestapsInSnapshots: true });

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export default firebase;
