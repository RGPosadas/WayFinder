import * as firebase from "firebase";
import secrets from "../../secrets";

// Initialize Firebase
const firebaseConfig = secrets.firebase;
firebase.initializeApp(firebaseConfig);

export const saveToDatabase = async (path, object) => {
  return await firebase
    .database()
    .ref(path)
    .set(object);
};
