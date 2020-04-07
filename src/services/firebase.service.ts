import * as firebase from "firebase";
import secrets from "../../secrets";

class FirebaseService {
  private static instance = new FirebaseService();

  private constructor() {
    // Initialize Firebase
    const firebaseConfig = secrets.firebase;
    firebase.initializeApp(firebaseConfig);
  }

  public static getInstance() {
    return FirebaseService.instance;
  }

  /**
   * Save object to database
   *
   * @param path Path in database
   * @param object object to save
   */
  public saveToDatabase = async (path: string, object: any) => {
    return firebase.database().ref(path).set(object);
  };
}
export default FirebaseService;
