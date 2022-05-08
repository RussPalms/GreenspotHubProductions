import {
	ButtonContainer,
	ClipBackground,
	ClipContainer,
	ClipObject,
	ClipShell,
	PlayButton,
	Player,
	PlayerWrapper,
	Play,
	PlayContainer,
} from "./ClipElements";
import ReactPlayer from "react-player";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { PlayIcon } from "@heroicons/react/solid";

const Clip = ({
	clipDisplayed,
	redirect,
	show,
	onClose,
	children,
	title,
	Icon,
}) => {
	// const vid = document.getElementById("clip");
	const [onPlay, setOnPlay] = useState(false);
	const playing = () => {
		// if (!vid.paused) {
		setOnPlay(true);
		// }
	};

	function togglePlay() {
		const video = document.getElementById("clip");
		// const [onPlay, setOnPlay] = useState(false);
		// const playing = () => {
		// 	if (!video.paused) {
		// 		setOnPlay(true);
		// 	}
		// };

		if (video.paused || video.ended) {
			video.play();
			playing;
		} else {
			video.pause();
		}
	}

	// const [isBrowser, setIsBrowser] = useState(false);

	const [isPlaying, setIsPlaying] = useState(true);

	const myCallback = () => console.log("Video has ended");

	const clipEnd = () => {
		redirect;
	};

	function toggleRedirect() {}

	const [isEnded, setIsEnded] = useState(false);
	const vidEnded = () => {
		setIsEnded(!isEnded);
	};
	// useEffect(() => {
	// 	const vid = document.getElementById("clip");

	// 	vid.addEventListener("ended", (e) => {
	// 		const vidEnded = () => {
	// 			setIsEnded(!isEnded);
	// 		};
	// 	});
	// }, []);

	// useEffect(() => {
	// 	const introClip = document.getElementById("clip");

	// 	document.addEventListener('', (e) => {
	// 		console.log(clipDisplayed);
	// 		if (clipDisplayed == false) {
	// 			console.log("clip has ended and redirect");
	// 		} else {
	// 			console.log("no redirect");
	// 		}
	// 	});
	// }, []);

	// useEffect(() => {
	// 	document.getElementById("clip").play();
	// });

	// useEffect(() => {
	// 	setIsBrowser(true);
	// }, []);

	// const handleCloseClick = (e) => {
	// 	e.preventDefault();
	// 	onClose();
	// };

	// const modalContent = show ? (
	// 	<>
	{
		/* <StyledModalOverlay> */
	}
	{
		/* <StyledModal> */
	}
	{
		/* <StyledModalHeader>
					<a href="#" onClick={handleCloseClick}>
						x
					</a>
				</StyledModalHeader>
				{title && <StyledModalTitle>{title}</StyledModalTitle>} */
	}
	{
		/* <StyledModalBody> */
	}
	{
		/* {children} */
	}
	{
		/* <PlayerWrapper> */
	}
	{
		/* <Player
							playing={isPlaying}
							height={"100%"}
							width={"100%"}
							// muted
							light
							url={require("../../assets/videos/YouTube-JakeBoogey/TheGreatWallIsAbound.mp4")}
							type="video/mp4"
							controls
							config={{
								file: {
									attributes: {
										controlsList: "nodownload",
									},
								},
							}}
						/> */
	}
	// <ClipContainer>
	// 	<ClipBackground>
	// 		<ClipShell>
	// 			<ClipObject
	// 				id="clip"
	// preload="true"
	// autoPlay
	// playing={isPlaying}
	// muted
	// onEnded={() => myCallback()}
	// 				src={require("../../assets/videos/YouTube-JakeBoogey/TheGreatWallIsAbound.mp4")}
	// 				type="video/mp4"
	// 			/>
	// 		</ClipShell>
	// 	</ClipBackground>
	// 	// {/* <button onClick={togglePlay}>Play</button> */}
	// </ClipContainer>
	{
		/* </PlayerWrapper> */
	}
	{
		/* </StyledModalBody> */
	}
	{
		/* </StyledModal> */
	}
	{
		/* </StyledModalOverlay> */
	}
	// 	</>
	// ) : null;

	// if (isBrowser) {
	// 	return ReactDOM.createPortal(
	// 		modalContent,
	// 		document.getElementById("modal-root")
	// 	);
	// } else {
	// 	return null;
	// }

	// if (isBrowser) {
	// 	return ReactDOM.createPortal(
	// 		<div>Hello from modal</div>,
	// 		document.getElementById("modal-root")
	// 	);
	// } else {
	// 	return null;
	// }

	return (
		<>
			<ClipContainer
				clipDisplayed={clipDisplayed}
				redirect={redirect}
				vidEnded={vidEnded}
				isEnded={isEnded}
			>
				<ClipBackground>
					<ClipShell>
						<ClipObject
							id="clip"
							preload="true"
							// autoplay={true}
							// playing={isPlaying}
							// mute
							// onEnded={() => clipEnd()}
							// onEnded={redirect}
							onEnded={vidEnded}
							onPlaying={playing}
							// src={require("../../../assets/videos/YouTube-JakeBoogey/TheGreatWallIsAbound.mp4")}
							src=""
							type="video/mp4"
						/>
					</ClipShell>
				</ClipBackground>
				<ButtonContainer>
					<PlayButton onClick={togglePlay} onPlay={onPlay}>
						{/* <PlayIcon /> */}
						<PlayContainer>
							<Play />
						</PlayContainer>
					</PlayButton>
				</ButtonContainer>
			</ClipContainer>
			{/* <ReactPlayer
				playing={isPlaying}
				height={"100%"}
				width={"100%"}
				url={require("../../assets/videos/YouTube-JakeBoogey/TheGreatWallIsAbound.mp4")}
				type="video/mp4"
				controls
				config={{
					file: {
						attributes: {
							controlsList: "nodownload",
						},
					},
				}}
			/> */}
		</>
	);
};

export default Clip;

const StyledModalBody = styled.div`
	/* padding-top: 10px; */
`;

const StyledModalHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: 25px;
`;

const StyledModal = styled.div`
	/* background: white; */
	/* width: 500px;
	height: 600px; */
	width: 100%;
	height: 100%;
	/* width: 100vh;
	height: 100vw; */
	/* border-radius: 15px; */
	/* padding: 15px; */
`;
const StyledModalOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	/* width: 100vh;
	height: 100vw; */
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: rgba(0, 0, 0, 0.5); */
`;
