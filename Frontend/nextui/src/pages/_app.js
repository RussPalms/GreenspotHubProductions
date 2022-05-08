import "../styles/globals.css";
// import { GlobalHTML, GlobalBody } from "../styles/stylesElements";
import Navigation from "../components/Navigation";
import { useState, useEffect, useRef } from "react";
import BoogeyStickman from "animations/BoogeyStickman";
import smoothscroll from "smoothscroll-polyfill";
// import Router from "next/router";
// import Link from "next/link";
// import Head from "next/head";
// import NProgress from "nprogress";

// Router.events.on("routeChangeStart", (url) => {
// 	console.log(`Loading: ${url}`);
// 	NProgress.start();
// });
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
	let informationRef = useRef(null);

	const handleInformationDirect = () => {
		window.__forceSmoothScrollPolyfill__ = true;
		smoothscroll.polyfill();
		informationRef.current.scrollIntoView({ behavior: "smooth" });
		// console.log("Scrolling to information");
	};

	let servicesRef = useRef(null);

	const handleServicesDirect = () => {
		window.__forceSmoothScrollPolyfill__ = true;
		smoothscroll.polyfill();
		servicesRef.current.scrollIntoView({ behavior: "smooth" });
		// console.log("Scrolling to Services");
	};

	let policiesRef = useRef(null);

	const handlePoliciesDirect = () => {
		window.__forceSmoothScrollPolyfill__ = true;
		smoothscroll.polyfill();
		policiesRef.current.scrollIntoView({ behavior: "smooth" });
		// console.log("Scrolling to Services");
	};

	// const informationRef = useRef();
	// function handleNavigation() {
	// 	informationRef.current.scrollIntoView({ behavior: "smooth" });
	// }
	// const handleNavigation = () => {

	// 	informationRef.current.scrollIntoView({ behavior: "smooth" });
	// };

	const [pointerTransition, setPointerTransition] = useState(false);
	const pointer = () => {
		setPointerTransition(!pointerTransition);
	};

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const [clipDisplayed, setClipDisplayed] = useState(true);
	const redirect = () => {
		// 	console.log(clipDisplayed);
		setClipDisplayed(!clipDisplayed);
		// 	console.log(clipDisplayed);

		// const clip = document.getElementById("clip");

		// if (clip.playing || clip.play) {
		// 	setClipDisplayed(!clipDisplayed);
		// 	console.log("clip is playing");
		// } else {
		// 	console.log("clip is paused");
		// }
		// if (clipDisplayed == false) {
		// 	console.log("clip has ended and redirect");
		// } else {
		// 	console.log("no redirect");
		// }

		// if (clip.ended) {
		// 	setClipDisplayed(!clipDisplayed);
		// 	console.log("clip has ended");
		// 	console.log(clipDisplayed);
		// } else {
		// 	console.log("clip hasn't ended and no redirect");
		// }
		// if (clipDisplayed == false) {
		// 	console.log("clip has ended and redirect");
		// } else {
		// 	console.log("no redirect");
		// }
	};

	// useEffect(() => {
	// 	const redirect = () => {
	// 		setClipDisplayed(!clipDisplayed);
	// 		console.log(clipDisplayed);
	// 	};
	// }, []);

	return (
		<>
			{/* <Head>
				<link rel="stylesheet" type="text/css" href="/nprogress.css" />
			</Head> */}
			<BoogeyStickman
				pointerTransition={pointerTransition}
				pointer={pointer}
			/>
			<Navigation
				pointer={pointer}
				isOpen={isOpen}
				toggle={toggle}
				clipDisplayed={clipDisplayed}
				redirect={redirect}
				handleInformationDirect={handleInformationDirect}
				handleServicesDirect={handleServicesDirect}
				handlePoliciesDirect={handlePoliciesDirect}
			>
				<Component
					{...pageProps}
					informationReference={informationRef}
					servicesReference={servicesRef}
					policiesReference={policiesRef}
				/>
			</Navigation>
		</>
	);
}

export default MyApp;
