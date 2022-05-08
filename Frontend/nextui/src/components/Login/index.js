// import { auth } from "../../../firebaseConfig/firebaseClient";
// import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "../../../firebaseConfig/firebaseClient";
// import { auth } from "firebase/auth";
// import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

import { LoginContainer, LoginButton } from "./LoginElements";
// import firebase from "firebase";

const Login = () => {
	// async function signInWithGithub() {
	//     auth.signInWithPopup(new auth.GithubAuthProvider())
	// return await firebase
	// 	.auth()
	// 	.signInWithPopup(new auth.GithubAuthProvider());

	// const auth = getAuth();
	// signInWithPopup(auth, provider)
	// 	.then((result) => {
	// This gives you a GitHub Access Token. You can use it to access the GitHub API.
	// const credential =//
	// GithubAuthProvider.credentialFromResult(result);
	// const token = credential.accessToken;

	// The signed-in user info.
	// const user = result.user;
	// ...
	// })
	// .catch((error) => {
	// 	const errorCode = error.code;
	// 	const errorMessage = error.message;
	// 	const email = error.email;
	// 	const credential =
	// 		GithubAuthProvider.credentialFromError(error);
	// 	// ...
	// });
	// }

	return (
		<>
			<LoginContainer>
				<LoginButton onClick={() => signInWithGithub()}>
					Sign in with GitHub
				</LoginButton>
			</LoginContainer>
		</>
	);
};

export default Login;
