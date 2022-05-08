import styled from "styled-components";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay, FaPause } from "react-icons/fa";

export const AudiosContainer = styled.div`
	/* height: 100%;
	width: 100%; */
	/* display: flex; */
	/* flex-direction: column; */
	/* align-items: center;
	justify-content: center; */
	height: 120px;
	width: 400px;
`;

export const AudioPlayer = styled.div`
	--primary: #f40082;
	--secondary: #ffd200;

	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	/* margin: auto; */
`;

export const AudioObject = styled.audio``;

export const Controls = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ForwardBackward = styled.button`
	background: none;
	border: none;
	display: flex;
	align-items: center;
	font-family: monospace;
	font-size: 2rem;
	cursor: pointer;

	:hover {
		color: var(--primary);
	}
`;

export const ForwardButton = styled(ForwardBackward)`
	height: 100%;
	width: 100%;
`;

export const Forward = styled(BsArrowRightShort)`
	height: 100%;
	width: 100%;
	font-size: 3rem;
`;

export const BackwardButton = styled(ForwardBackward)`
	height: 100%;
	width: 100%;
`;

export const Backward = styled(BsArrowLeftShort)`
	height: 100%;
	width: 100%;
	font-size: 3rem;
`;

export const PlayPauseContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	/* border-radius: 50%; */
`;

export const PlayPause = styled.button`
	background: var(--primary);
	border: none;
	border-radius: 50%;
	width: 75px;
	height: 75px;
	/* height: 100%;
	width: 100%; */
	font-size: 32px;
	color: var(--secondary);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PlayButton = styled(PlayPause)`
	height: 100%;
	width: 100%;
`;

export const Play = styled(FaPlay)`
	/* height: 100%;
	width: 100%; */
	/* font-size: 4rem; */
	position: relative;
	left: 5px;
`;

export const PauseButton = styled(PlayPause)`
	/* height: 100%;
	width: 100%; */
`;

export const Pause = styled(FaPause)`
	/* height: 100%;
	width: 100%; */
`;

export const Duration = styled.div`
	height: 100%;
	width: 100%;
	font-family: monospace;
	font-size: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CurrentTime = styled(Duration)`
	/* margin-left: 25px; */
`;

export const Progress = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ProgressBar = styled.input`
	--bar-bg: #ffe3d4;
	--seek-before-width: 0;
	--seek-before-color: #ffc2a1;
	--knobby: #3452a5;
	--selectedKnobby: #26c9c3;

	appearance: none;
	background: var(--bar-bg);
	border-radius: 15px;
	position: relative;
	width: 100%;
	height: 11px;
	/* height: 100%; */
	outline: none;

	/* safari */
	::-webkit-slider-runnable-track {
		background: var(--bar-bg);
		border-radius: 10px;
		position: relative;
		width: 100%;
		height: 11px;
		outline: none;
	}

	/* firefox - range tracking*/
	::-moz-range-track {
		background: var(--bar-bg);
		border-radius: 10px;
		position: relative;
		width: 100%;
		height: 11px;
		outline: none;
	}

	::-moz-focus-outer {
		border: 0;
	}

	/* chrome & safari */
	::before {
		content: "";
		height: 11px;
		width: var(--seek-before-width);
		background-color: var(--seek-before-color);
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		cursor: pointer;
	}

	/* firefox - range progress */
	::-moz-range-progress {
		background-color: var(--seek-before-color);
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		height: 11px;
	}

	/* knobby - chrome and safari */
	::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 15px;
		width: 15px;
		border-radius: 50%;
		border: none;
		background-color: var(--knobby);
		cursor: pointer;
		position: relative;
		margin: -2px 0 0 0;
		z-index: 3;
		box-sizing: border-box;
	}

	/* knobby while dragging - chrome and safari */
	:active::-webkit-slider-thumb {
		transform: scale(1.2);
		background: var(--selectedKnobby);
	}

	/* knobby - firefox */
	::-moz-range-thumb {
		height: 15px;
		width: 15px;
		border-radius: 50%;
		border: transparent;
		background-color: var(--knobby);
		cursor: pointer;
		position: relative;
		z-index: 3;
		box-sizing: border-box;
	}

	/* knobby while dragging - firefox */
	:active::-moz-range-thumb {
		transform: scale(1.2);
		background: var(--selectedKnobby);
	}
`;

export const AudiosWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
