import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import {
	addDoc,
	collection,
	query,
	orderBy,
	onSnapshot,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import * as React from "react";

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
};

const firestoreConnect = getFirestore(initializeApp(firebaseConfig));

const timestamp = serverTimestamp();

// export const storageConnect = getStorage(firestoreConnect)
// export const databaseConnect = getFirestore(firestoreConnect)

const storage = getStorage(firestoreConnect);
const db = getFirestore(firestoreConnect);

const useFirestore = (collections) => {
	const [docs, setDocs] = useState([]);

	React.useEffect(() => {
		const collectionsRef = collection(db, collections);

		const collectionsQuery = query(
			collectionsRef,
			orderBy("createdAt", "desc")
		);

		const unsub = () => {
			onSnapshot(collectionsQuery, (snapshot) => {
				let documents = [];
				snapshot.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id });
				});
				setDocs(documents);
			});
		};

		return unsub();
	}, [collections]);

	return { docs };
};

const useStorage = (file) => {
	// const { data: session } = useSession();
	// const userImage = `users/${session?.id}/images/`;
	const userImage = `/ivideos/`;

	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState("");

	React.useEffect(() => {
		const storageRef = ref(storage, `${userImage}${file.name}`);
		const collectionRef = collection(db, userImage);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snap) => {
				let percentage =
					(snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			(err) => {
				setError(err);
			},
			async () => {
				const url = await getDownloadURL(uploadTask.snapshot.ref);
				const createdAt = timestamp;

				await addDoc(collectionRef, {
					url,
					createdAt,
				});
				setUrl(url);
			}
		);
	}, [file]);

	return { progress, url, error };
};

export { useFirestore, useStorage };
