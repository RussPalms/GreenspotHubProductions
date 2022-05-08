import {
	ReactPlayerVideo,
	VideoList,
	VideoPlayer,
	VideosBackground,
	VideosContainer,
	VideosObject,
	VideosShell,
	PrevVid,
	NextVid,
	Video,
	ActiveVideo,
} from "./VideosElements";
// import ReactPlayer from "react-player";
import { useState, useCallback } from "react";
import FlipMove from "react-flip-move";
import { featuredVideos } from "./index.data";

const Videos = ({ videos = featuredVideos }) => {
	const [current, setCurrent] = useState(0);
	const length = videos.length;

	const nextVideo = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevVideo = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(videos) || videos.length <= 0) {
		return null;
	}

	const [isPlaying, setIsPlaying] = useState(true);

	const handleContextMenu = useCallback((event) => {
		event.preventDefault();
	}, []);

	return (
		<>
			<VideosContainer>
				{/* <VideosShell> */}
				<VideosBackground>
					{/* <VideosObject
						autoPlay
						loop
						controls
						mute
						src={require("../../../assets/videos/YouTube-JakeBoogey/TheGreatWallIsAbound.mp4")}
						type="video/mp4"
					/> */}

					<PrevVid onClick={prevVideo} />
					<NextVid onClick={nextVideo} />
					{featuredVideos.map((video, i) => {
						return (
							<VideosShell
								className={
									i === current ? "video active" : "video"
								}
								key={i}
							>
								{i === current && (
									<VideosObject
										key={i}
										type="video/mp4"
										controls
										mute
										src={video.vid}
										alt="Featured Video"
									/>
								)}
							</VideosShell>
						);
					})}
				</VideosBackground>
				{/* <VideosObject
					// key={i}
					type="video/mp4"
					controls
					mute
					src="https://firebasestorage.googleapis.com/v0/b/green-spot-productions.appspot.com/o/TheGreatWallIsAbound.mp4?alt=media&token=fca8a28d-3c60-4e05-a7ba-de24bb037071"
					alt="Featured Video"
				/> */}
				{/* </VideosShell> */}
				{/* <VideoPlayer></VideoPlayer> */}
				{/* <ReactPlayer
					url="https://www.youtube.com/watch?v=FTWyABy3VQc"
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
				{/* <VideoList>
					<ReactPlayerVideo
						playing={isPlaying}
						height={"100%"}
						width={"100%"}
						light={
							"https://i.ytimg.com/an_webp/-apQqGNtfyc/mqdefault_6s.webp?du=3000&sqp=CJmyhYoG&rs=AOn4CLBe204o5x9wZEWPSBheN3DCvrwigA"
						}
						url={require("../../../assets/videos/YouTube-JakeBoogey/TheGreatWallIsAbound.mp4")}
						type="video/mp4"
						controls
						onContextMenu={handleContextMenu}
						config={{
							file: {
								attributes: {
									controlsList: "nodownload",
								},
							},
						}}
					/>
					<ReactPlayerVideo
						playing={isPlaying}
						height={"100%"}
						width={"100%"}
						url={require("../../../assets/videos/YouTube-DavyBrownSound/InLoveWithYou.mp4")}
						type="video/mp4"
						controls
						onContextMenu={handleContextMenu}
						config={{
							file: {
								attributes: {
									controlsList: "nodownload",
								},
							},
						}}
					/>
					<ReactPlayerVideo
						playing={isPlaying}
						height={"100%"}
						width={"100%"}
						url={require("../../../assets/videos/YouTube-ZupaNova/WhereDatWeedAt.mp4")}
						type="video/mp4"
						controls
						onContextMenu={handleContextMenu}
						config={{
							file: {
								attributes: {
									controlsList: "nodownload",
								},
							},
						}}
					/>
				</VideoList> */}
			</VideosContainer>
		</>
	);
};

export default Videos;
