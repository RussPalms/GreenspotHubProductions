// // import firebase, { initializeApp } from "firebase/app";
// // import "firebase/auth";
// // import "firebase/firestore";

// import { initializeApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // import { getAuth } from "firebase/auth";
// import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

// // import {firebase} from "firebase";

// // Firebase configuration variables loaded from environment variables
// const clientCredentials = {
// 	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// 	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
// 	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// 	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// if (!getApps().length) {
// }

// const app = initializeApp(clientCredentials);

// // firebase.initializeApp(clientCredentials);

// const db = getFirestore(app);
// const auth = getAuth(app);
// signInWithPopup(auth, provider)
// 	.then((result) => {
// 		// This gives you a GitHub Access Token. You can use it to access the GitHub API.
// 		const credential = GithubAuthProvider.credentialFromResult(result);
// 		const token = credential.accessToken;

// 		// The signed-in user info.
// 		const user = result.user;
// 		// ...
// 	})
// 	.catch((error) => {
// 		// Handle Errors here.
// 		const errorCode = error.code;
// 		const errorMessage = error.message;
// 		// The email of the user's account used.
// 		const email = error.email;
// 		// The AuthCredential type that was used.
// 		const credential = GithubAuthProvider.credentialFromError(error);
// 		// ...
// 	});

// export { db, auth };

// // In this code, we initialize a Firebase app with the config.
// // const firebaseApp = firebase.initializeApp(clientCredentials);

// // We get database and authentication from your Firebase Project
// // and export these objects so that we can use them anywhere.
// // const db = firebaseApp.firestore();
// // const auth = firebase.auth();

// // export { db, auth };

// // If Firebase isn't already initialized, initialize it using the above credentials.
// // if (!firebase.apps.length) {
// // firebase.initializeApp(clientCredentials);
// // }

// // export default firebase;
