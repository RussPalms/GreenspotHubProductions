import styled from "styled-components";
import FlipMove from "react-flip-move";
import ReactPlayer from "react-player";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const VideosContainer = styled.div`
	display: flex;
	/* display: grid;
	grid-template-areas: 'vid1' 'vid2' 'vid3'; */
	/* justify-content: center; */
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	/* width: 100%; */
	/* flex-direction: column; */
	/* margin-top: 60px;
	margin-bottom: 60px; */
	/* overflow: hidden; */
	/* position: relative; */
	/* overflow-y: scroll; */
	z-index: 1;
`;

export const Video = styled.div`
	opacity: 0;
	transition-duration: 1s ease;
`;

export const ActiveVideo = styled(Video)`
	opacity: 1;
	transition-duration: 1s;
	transform: scale(1.08);
`;

export const VideosShell = styled.div`
	/* .video {
		opacity: 0;
		transition-duration: 1s ease;
	}

	.video.active {
		opacity: 1;
		transition-duration: 1s;
		transform: scale(1.08);
	} */

	/* display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	position: relative;
	z-index: 2; */

	/* :before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
				180deg,
				rgba(18, 124, 9, 0.1) 0%,
				rgba(64, 255, 0, 0.2) 10% rgba(18, 124, 9, 0.3) 20%
					rgba(18, 124, 9, 0.4) 30% rgba(18, 124, 9, 0.5) 40%
					rgba(18, 124, 9, 0.6) 50% rgba(18, 124, 9, 0.7) 60%
					rgba(18, 124, 9, 0.8) 70% rgba(18, 124, 9, 0.9) 80%
					rgba(18, 124, 9, 1) 90% rgba(18, 124, 9, 0.5) 100%
			),
			linear-gradient(180deg, rgba(18, 124, 9, 0.1) 0%, transparent 100%);
		z-index: 3;
	} */
`;

export const VideosBackground = styled.div`
	position: relative;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* width: 90vw;
	height: 80vh; */
	/* overflow: hidden; */
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const VideosObject = styled.video`
	/* width: 100%;
	height: 100%; */
	width: 60vw;
	height: 70vh;
	/* width: 100vw;
	height: 100vh; */
	-o-object-fit: cover;
	object-fit: cover;
	border-radius: 25px;
`;

export const VideoPlayer = styled.div`
	flex: 0.7;
	/* height: 100%;
	width: 100%; */
	/* top: 60px;
	right: 0;
	bottom: 60px;
	left: 0; */
	/* -o-object-fit: cover; */
	/* object-fit: cover; */
	/* position: absolute; */
`;

// export const VideoList = styled.div`
// 	flex: 0.3;
// `;

export const VideoList = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* height: 100%; */
	/* width: 100vw;
	height: 100vh; */
	/* overflow: hidden; */
	/* grid-column: vid1 vid2 vid3; */
	/* position: absolute; */
`;

export const ReactPlayerVideo = styled(ReactPlayer)`
	/* margin-right: 20px; */
	/* margin-bottom: 20px; */
	/* height: 500px;
	width: 500px; */
	/* max-height: 720px;
	max-width: 1080px; */
	height: 100%;
	width: 100%;
`;

export const PrevVid = styled(FaArrowAltCircleLeft)`
	position: absolute;
	top: 50%;
	/* left: 32px; */
	left: 3vw;
	font-size: 3rem;
	cursor: pointer;
	z-index: 10;
	user-select: none;
`;

export const NextVid = styled(FaArrowAltCircleRight)`
	position: absolute;
	top: 50%;
	/* right: 32px; */
	right: 3vw;
	font-size: 3rem;
	cursor: pointer;
	z-index: 10;
	user-select: none;
`;
