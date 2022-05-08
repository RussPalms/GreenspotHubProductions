import styled from "styled-components";
import ReactPlayer from "react-player";
import { PlayIcon } from "@heroicons/react/outline";
import { IoIosPlay } from "react-icons/io";

export const ClipContainer = styled.aside`
	display: flex;
	/* display: none; */
	justify-content: center;
	align-items: center;
	z-index: 101;
	height: 100%;
	width: 100%;

	transition: all 0.5s ease-in;
	/* position: absolute; */
	/* position: fixed; */

	/* opacity: 0; */
	/* opacity: 100%; */
	/* bottom: -100%; */
	/* bottom: 0; */

	/* position: ${({ clipDisplayed }) =>
		clipDisplayed ? "fixed" : "absolute"};
	opacity: ${({ clipDisplayed }) => (clipDisplayed ? "0" : "100%")};
	bottom: ${({ clipDisplayed }) => (clipDisplayed ? "-100%" : "0")}; */

	position: ${({ isEnded }) => (isEnded ? "fixed" : "absolute")};
	opacity: ${({ isEnded }) => (isEnded ? "0" : "100%")};
	bottom: ${({ isEnded }) => (isEnded ? "-100%" : "0")};

	/* position: ${({ clipDisplayed }) =>
		clipDisplayed ? "absolute" : "fixed"};
	opacity: ${({ clipDisplayed }) => (clipDisplayed ? "100%" : "0")};
	bottom: ${({ clipDisplayed }) => (clipDisplayed ? "0" : "-100%")}; */

	/* opacity: ${({ clipOpen }) => (clipOpen ? "0" : "100%")}; */
	/* opacity: 0; */
	/* bottom: ${({ clipOpen }) => (clipOpen ? "-100%" : "0")}; */
	/* top: 0; */

	:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
				180deg,
				rgba(63, 191, 63, 0.1) 0%,
				/* rgba(63, 191, 63, 0.2) 10%
				rgba(63, 191, 63, 0.3) 20%
				rgba(63, 191, 63, 0.4) 30%
				rgba(63, 191, 63, 0.5) 40%
				rgba(63, 191, 63, 0.6) 50%
				rgba(63, 191, 63, 0.7) 60%
				rgba(63, 191, 63, 0.8) 70%
				rgba(63, 191, 63, 0.9) 80%
				rgba(63, 191, 63, 1.0) 90% */
					rgba(63, 150, 63, 0.3) 100%
			),
			linear-gradient(180deg, rgba(63, 191, 63, 0.1) 0%, transparent 100%);
		z-index: 102;
	}
`;

export const ClipBackground = styled.div`
	position: absolute;
	/* position: relative; */
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* width: 100vh;
	height: 100vh; */
	overflow: hidden;
`;

export const ClipShell = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/* height: 100vh;
	width: 100vw; */
	width: 100%;
	height: 100%;
	position: relative;
	/* z-index: 1; */
`;

export const ClipObject = styled.video`
	width: 100%;
	height: 100%;
	/* width: 100vh;
	height: 100vw; */
	-o-object-fit: cover;
	object-fit: cover;
`;

export const Player = styled(ReactPlayer)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	height: 100%;
	width: 100%;
	/* -o-object-fit: cover;
	object-fit: cover; */
	/* margin-bottom: -100vh; */
`;

export const PlayerWrapper = styled.div`
	/* height: 100vh;C
	width: 100vw; */
	height: 100%;
	width: 100%;
	position: relative;
	padding-top: 56.25%;
`;

export const ButtonContainer = styled.div`
	/* position: relative; */
	/* display: none; */
	z-index: 200;
	display: flex;
	align-items: center;
	justify-content: center;
	/* top: 0; */
	/* height: 100%;
	width: 100%; */
	/* position: relative; */
	/* position: fixed; */
	/* border: solid white 1px; */
	/* margin-bottom: 50px; */
	/* margin-bottom: 50vh; */
	/* bottom: -50vh; */
	/* position: absolute; */
`;

export const PlayContainer = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(64, 255, 0, 0.5);
	width: inherit;
	height: inherit;
	text-align: center;
	border-radius: 50%;
	cursor: pointer;
	transition: all 0.5s;
	position: relative;
	z-index: 201;
`;

export const PlayButton = styled.button`
	/* display: flex; */
	display: ${({ onPlay }) => (onPlay ? "none" : "flex")};
	align-items: center;
	justify-content: center;
	position: relative;
	/* position: absolute; */
	/* -o-object-fit: cover;
	object-fit: cover; */
	height: 10em;
	width: 10em;
	/* background: lightgreen; */
	background-color: transparent;
	/* background: none; */
	/* background-color: white; */
	/* color: green; */
	/* border: none; */
	border-radius: 50%;
	/* border: 10px solid darkgreen; */
	border: none;
	/* opacity: 0.5; */
	/* box-shadow: 10px; */
	/* border: 1rem solid green; */
	/* border: green; */
	/* border: none; */

	/* padding: 10px; */
	/* animation: pulsePlay 3s ease-in-out infinite; */
	z-index: 201;

	/* transition: linear 200ms; */

	@keyframes pulsePlay {
		from {
			transform: scale(1);
			/* transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1); */
			opacity: 0.5;
		}

		to {
			transform: scale(1.5);
			/* transform: translateX(-50%) translateY(-50%) translateZ(0) */
			/* scale(1.5); */
			opacity: 0;
		}
	}

	/* &:hover {
		opacity: 0.7;
	} */

	&::before {
		position: absolute;
		content: "";
		/* left: 50%;
		top: 50%; */
		/* transform: translate(-50%) translateY(-50%); */
		display: block;
		background-color: #40ff00;
		/* color: green; */
		border-radius: 50%;
		animation: pulsePlay 1.5s ease-out infinite;
		opacity: 0.2;
		height: 100%;
		width: 100%;
		z-index: 202;
	}

	/* > ${PlayContainer} {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(64, 255, 0, 0.2);
		width: inherit;
		height: inherit;
		text-align: center;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.5s;
		position: relative;
		z-index: 201;
	} */
`;

export const Play = styled(IoIosPlay)`
	/* height: 10em;
	width: 10em; */
	font-size: 10em;
	/* padding-left: 0.5em; */
	padding-left: 10px;
	/* color: green; */
	z-index: 202;
	color: lightgreen;
`;
