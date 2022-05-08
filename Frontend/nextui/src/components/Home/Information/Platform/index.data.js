// import optimize from "../../assets/images/LandingPageProps/PhotographyProps/optimize_image_green1.svg";
// import player from "../../assets/images/LandingPageProps/VideographyProps/media_player_green2.svg";
// import compose from "../../assets/images/LandingPageProps/RecordingProps/compose_music_green3.svg";

export const About = {
	id: "about",
	lightBg: false,
	lightText: true,
	lightTextDesc: true,
	topLine: "Premium Production",
	headline: "Your Go To Entertainment Provider",
	// headline: "",
	description:
		"Do you have a song in mind? Maybe a scene that you wanted to capture? How about an image, but you just can't seem to get the right angle? We have the equipment and the strategies for integrating those visions into your product.",
	// '',
	buttonLabel: "What am I waiting for?",
	imgStart: false,
	// img: optimize,
	img: require("../../../../assets/images/LandingPageProps/PhotographyProps/optimize_image_green1.svg"),
	// img: "",
	alt: "optimize",
	dark: true,
	primary: true,
	darkText: false,
};

export const Discover = {
	id: "discover",
	lightBg: true,
	lightText: false,
	lightTextDesc: false,
	topLine: "Grow",
	headline: "Build An Online Media Portfolio",
	description:
		"Fill your library and share your content to the world. All you need is an internet connection and a phone or computer.",
	buttonLabel: "I'm Ready!",
	imgStart: true,
	// img: player,
	img: require("../../../../assets/images/LandingPageProps/VideographyProps/media_player_green2.svg"),
	// img: "",
	alt: "player",
	dark: false,
	primary: false,
	darkText: true,
};

export const Access = {
	id: "access",
	lightBg: true,
	lightText: false,
	lightTextDesc: false,
	topLine: "Begin Your Journey",
	headline: "Start By Uploading Your Media",
	description:
		"Creating an account is FREE and very simple to get up and running. At a PREMIUM you can sign up for a Boogey Account to access never-before-seen products.",
	buttonLabel: "Let's Do This",
	imgStart: false,
	// img: compose,
	img: require("../../../../assets/images/LandingPageProps/RecordingProps/compose_music_green3.svg"),
	// img: "",
	alt: "compose",
	dark: false,
	primary: false,
	darkText: true,
};
