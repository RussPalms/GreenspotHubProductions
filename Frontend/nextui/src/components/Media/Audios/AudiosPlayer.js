import { useState, useRef, useEffect } from "react";
// import styles from "../styles/AudioPlayer.module.css";
import {
	AudioObject,
	AudioPlayer,
	AudiosContainer,
	BackwardButton,
	Backward,
	CurrentTime,
	ForwardButton,
	PlayPause,
	PlayButton,
	Play,
	PauseButton,
	Pause,
	Forward,
	Progress,
	ProgressBar,
	Duration,
	Controls,
	PlayPauseContainer,
} from "./AudiosElements";
// import headchange from "assets/audios/Headchange/HeadchangeSong.mp3";

const AudiosPlayer = ({ song }) => {
	// const [hasMounted, setHasMounted] = useState(false);
	// useEffect(() => {
	// 	setHasMounted(true);
	// }, []);
	// if (!hasMounted) {
	// 	return null;
	// }

	// state
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	// references
	const audioPlayer = useRef(); // reference our audio component
	const progressBar = useRef(); // reference our progress bar
	const animationRef = useRef(); // reference the animation

	useEffect(() => {
		const seconds = Math.floor(audioPlayer.current.duration);
		setDuration(seconds);
		progressBar.current.max = seconds;
	}, [
		audioPlayer?.current?.loadedmetadata,
		audioPlayer?.current?.readyState,
	]);

	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60);
		const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${returnedMinutes}:${returnedSeconds}`;
	};

	const togglePlayPause = () => {
		const prevValue = isPlaying;
		setIsPlaying(!prevValue);
		if (!prevValue) {
			audioPlayer.current.play();
			animationRef.current = requestAnimationFrame(whilePlaying);
		} else {
			audioPlayer.current.pause();
			cancelAnimationFrame(animationRef.current);
		}
	};

	const whilePlaying = () => {
		progressBar.current.value = audioPlayer.current.currentTime;
		changePlayerCurrentTime();
		animationRef.current = requestAnimationFrame(whilePlaying);
	};

	const changeRange = () => {
		audioPlayer.current.currentTime = progressBar.current.value;
		changePlayerCurrentTime();
	};

	const changePlayerCurrentTime = () => {
		progressBar.current.style.setProperty(
			"--seek-before-width",
			`${(progressBar.current.value / duration) * 100}%`
		);
		setCurrentTime(progressBar.current.value);
	};

	const backThirty = () => {
		progressBar.current.value = Number(progressBar.current.value - 30);
		changeRange();
	};

	const forwardThirty = () => {
		progressBar.current.value = Number(progressBar.current.value + 30);
		changeRange();
	};

	return (
		<>
			<AudiosContainer song={song}>
				<AudioPlayer song={song}>
					<AudioObject
						ref={audioPlayer}
						preload="metadata"
						// src={song}
						// src={headchange}
						src="https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/HeadchangeSong.mp3?alt=media&token=be2e6147-eb98-4ad5-9813-c5d50c8b2151"
					/>
					<Controls>
						<BackwardButton onClick={backThirty}>
							<Backward /> 30
						</BackwardButton>
						<PlayPauseContainer>
							<PlayPause onClick={togglePlayPause}>
								{isPlaying ? (
									<PauseButton>
										<Pause />
									</PauseButton>
								) : (
									<PlayButton>
										<Play />
									</PlayButton>
								)}
							</PlayPause>
						</PlayPauseContainer>
						<ForwardButton onClick={forwardThirty}>
							30
							<Forward />
						</ForwardButton>
					</Controls>
					<Progress>
						<CurrentTime>{calculateTime(currentTime)}</CurrentTime>
						<ProgressBar
							type="range"
							defaultValue="0"
							ref={progressBar}
							onChange={changeRange}
						/>
						<Duration>
							{duration &&
								!isNaN(duration) &&
								calculateTime(duration)}
						</Duration>
					</Progress>
				</AudioPlayer>
			</AudiosContainer>
		</>
	);
};

export default AudiosPlayer;
