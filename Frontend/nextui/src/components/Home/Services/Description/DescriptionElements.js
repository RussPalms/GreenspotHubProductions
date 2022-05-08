import styled from "styled-components";
import Image from "next/image";

export const DescriptionContainer = styled.section`
	background: #0c260c;
	height: 100%;
	/* width: 100vw; */
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 50px;

	@media screen and (max-width: 768px) {
		padding: 10px;
	}
`;

export const DescriptionWrapper = styled.div`
	/* flex: 1; */
	width: 100%;
	/* max-width: 350px; */
	/* max-width: 30vw; */
	/* margin: 0 auto; */
	margin: auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	/* grid-template-rows: 1fr 1fr 1fr; */
	align-items: center;
	justify-items: center;
	grid-gap: 15px;
	/* padding: 0 50px; */
	/* padding: auto; */
	position: relative;
	/* bottom: 0; */

	@media screen and (max-width: 768px) {
		/* grid-template-columns: none;
        grid-template-rows: 1fr 1fr 1fr; */
		grid-template-columns: 1fr;
		/* grid-gap: 5px; */
		position: absolute;
		bottom: 0;
		padding: 10px;
	}
`;

export const DescriptionH1 = styled.h1`
	font-size: 2rem;
	color: #76b041;
	/* margin-bottom: 64px; */
	/* position: static; */
	position: absolute;
	z-index: 19;
	top: 0;
`;

export const DescriptionH2 = styled.h2`
	font-size: 1rem;
	/* margin-bottom: 10px; */
	margin: auto;
`;

export const DescriptionP = styled.p`
	font-size: 1rem;
	text-align: center;
	white-space: normal !important;
`;

export const PhotoCard = styled.div`
	/* transform: ${({ photoGrown }) =>
		photoGrown ? "translateY(-55px)" : "none"}; */
	/* width: 28vw; */
	width: 100%;
	/* height: 40vh; */
	height: ${({ photoGrown }) => (photoGrown ? "80vh" : "40vh")};
	/* position: ${({ isGrown }) => (isGrown ? "absolute" : "static")}; */
	/* top: 1; */
	max-width: 500px;
	/* height: 160px;
    width: 260px; */
	background: #7bc950;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	/* max-height: 340px; */
	padding: 30px;
	box-shadow: 0 1px 3px rgba(63, 191, 63, 0.1);
	transition: all 0.2s ease-in-out;
	/* transition: all 0.3s linear; */
	/* position: relative; */
	/* position: ${({ photoGrown }) =>
		photoGrown ? "absolute" : "relative"}; */
	z-index: ${({ photoGrown }) => (photoGrown ? "20" : "0")};

	&:hover {
		/* transform: scale(1.02); */
		/* transform: ${({ isGrown }) => (isGrown ? "none" : "none")}; */
		/* transition: ${({ isGrown }) =>
			isGrown ? "none" : "scale(1.02)"}; */
		/* transition: all 0.2s ease-in-out; */
		cursor: pointer;

		/* @media screen and (max-width: 768px) {
			transform: scale(1)
		} */
	}

	@media screen and (max-width: 768px) {
		/* height: 160px; */
		/* transform: ${({ isGrown }) =>
			isGrown ? "translateY(55px)" : "none"}; */
		height: ${({ photoGrown }) => (photoGrown ? "83vh" : "22vh")};
		position: ${({ photoGrown }) => (photoGrown ? "absolute" : "static")};
		object-fit: ${({ photoGrown }) => (photoGrown ? "cover" : "none")};
		transform: ${({ photoGrown }) =>
			photoGrown ? "translateY(-18vh)" : "none"};
		/* top: 0; */
		/* height: 22vh; */
		/* width: 260px; */
		width: ${({ photoGrown }) => (photoGrown ? "95%" : "100%")};
		padding: 5px;
		/* z-index: 20; */
	}
`;

export const PhotographyPricing = styled.p`
	font-size: 1rem;
`;

export const PhotographyPricingDescription = styled.p`
	font-size: 1rem;
	white-space: normal;
	margin: auto;
	text-align: center;
`;

export const VideoCard = styled.div`
	/* transform: ${({ videoGrown }) =>
		videoGrown ? "translateY(-55px)" : "none"}; */
	/* width: 28vw; */
	width: 100%;
	/* height: 40vh; */
	height: ${({ videoGrown }) => (videoGrown ? "80vh" : "40vh")};
	/* position: ${({ isGrown }) => (isGrown ? "absolute" : "static")}; */
	/* top: 1; */
	max-width: 500px;
	/* height: 160px;
    width: 260px; */
	background: #7bc950;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	/* max-height: 340px; */
	padding: 30px;
	box-shadow: 0 1px 3px rgba(63, 191, 63, 0.1);
	transition: all 0.2s ease-in-out;
	/* transition: all 0.3s linear; */
	/* position: relative; */
	/* position: ${({ videoGrown }) =>
		videoGrown ? "absolute" : "relative"}; */
	z-index: ${({ videoGrown }) => (videoGrown ? "20" : "0")};

	&:hover {
		/* transform: scale(1.02); */
		/* transform: ${({ isGrown }) => (isGrown ? "none" : "none")}; */
		/* transition: ${({ isGrown }) =>
			isGrown ? "none" : "scale(1.02)"}; */
		/* transition: all 0.2s ease-in-out; */
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		/* height: 160px; */
		/* transform: ${({ isGrown }) =>
			isGrown ? "translateY(55px)" : "none"}; */
		height: ${({ videoGrown }) => (videoGrown ? "83vh" : "22vh")};
		position: ${({ videoGrown }) => (videoGrown ? "absolute" : "static")};
		object-fit: ${({ videoGrown }) => (videoGrown ? "cover" : "none")};
		transform: ${({ videoGrown }) =>
			videoGrown ? "translateY(-18vh)" : "none"};
		/* top: 0; */
		/* height: 22vh; */
		/* width: 260px; */
		width: ${({ videoGrown }) => (videoGrown ? "95%" : "100%")};
		padding: 2px;
		/* z-index: 20; */
	}
`;

export const VideographyPricing = styled.p`
	font-size: 1rem;
`;

export const VideographyPricingDescription = styled.p`
	font-size: 1rem;
	white-space: normal;
	margin: auto;
	text-align: center;
`;

export const AudioCard = styled.div`
	/* transform: ${({ audioGrown }) =>
		audioGrown ? "translateY(-55px)" : "none"}; */
	/* width: 28vw; */
	width: 100%;
	/* height: 40vh; */
	height: ${({ audioGrown }) => (audioGrown ? "80vh" : "40vh")};
	/* position: ${({ isGrown }) => (isGrown ? "absolute" : "static")}; */
	/* top: 1; */
	max-width: 500px;
	/* height: 160px;
    width: 260px; */
	background: #7bc950;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	/* max-height: 340px; */
	padding: 30px;
	box-shadow: 0 1px 3px rgba(63, 191, 63, 0.1);
	transition: all 0.2s ease-in-out;
	/* transition: all 0.3s linear; */
	/* position: relative; */
	/* position: ${({ audioGrown }) =>
		audioGrown ? "absolute" : "relative"}; */
	z-index: ${({ audioGrown }) => (audioGrown ? "20" : "0")};

	&:hover {
		/* transform: scale(1.02); */
		/* transform: ${({ isGrown }) => (isGrown ? "none" : "none")}; */
		/* transition: ${({ isGrown }) =>
			isGrown ? "none" : "scale(1.02)"}; */
		/* transition: all 0.2s ease-in-out; */
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		/* height: 160px; */
		/* transform: ${({ isGrown }) =>
			isGrown ? "translateY(55px)" : "none"}; */
		height: ${({ audioGrown }) => (audioGrown ? "83vh" : "22vh")};
		position: ${({ audioGrown }) => (audioGrown ? "absolute" : "static")};
		object-fit: ${({ audioGrown }) => (audioGrown ? "cover" : "none")};
		transform: ${({ audioGrown }) =>
			audioGrown ? "translateY(-18vh)" : "none"};
		/* top: 0; */
		/* height: 22vh; */
		/* width: 260px; */
		/* width: 100%; */
		width: ${({ audioGrown }) => (audioGrown ? "95%" : "100%")};
		padding: 2px;
		/* z-index: 20; */
	}
`;

export const RecordingPricing = styled.p`
	font-size: 1rem;
`;

export const RecordingPricingDescription = styled.p`
	font-size: 1em;
	white-space: normal;
	margin: auto;
	text-align: center;
`;

export const DescriptionIcon = styled(Image)`
	/* height: 160px;
	width: 160px; */
	/* width: 100%;
	height: 100%; */
`;
