import app from 'firebase/app';
import 'firebase/auth';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDZyOqJh06FJbNyq8UrYTeeJTN-wauhnk8",
  authDomain: "walkwithgod-73ee8.firebaseapp.com",
  databaseURL: "https://walkwithgod-73ee8.firebaseio.com",
  projectId: "walkwithgod-73ee8",
  storageBucket: "walkwithgod-73ee8.appspot.com",
  messagingSenderId: "21802022919",
  appId: "1:21802022919:web:f763e88e3000ab488092a2",
  measurementId: "G-R9W0EJLMCG"
};

let author_id_global;
let author_name_global;
let author_icon_global;
let paragraph_number = 1;

class Firebase {
  constructor() {
    app.initializeApp(config);
    /* Firebase APIs */
    this.auth = app.auth();
    this.db = firebase.firestore();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  onAuthUserListener = (next, fallback) =>
      this.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
        } else {
          fallback();
        }
      });

  // // *** User API ***
  //
  async fetchCurrentUserProfile() {
    try {
      let doc = await this.db.collection("users").doc(this.auth.currentUser.uid).get()
      author_name_global = doc.get("name");
      author_icon_global = doc.get("image_url");
      return {name:author_name_global,icon:author_icon_global};
    } catch (error) {
      alert(error.message);
    }
  }


  // *** Article API ***

  article = articleId => this.db.where(`articles/${articleId}`);

  articles = () => this.db.collection('articles');

}

export default Firebase;