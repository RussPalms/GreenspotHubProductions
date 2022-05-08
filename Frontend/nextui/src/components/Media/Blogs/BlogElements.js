import styled from "styled-components";

export const BlogContainer = styled.div`
	height: 100%;
	width: 100%;
	/* height: 100vh;
	width: 100vw; */
	/* change take away relative when filling the whole page */
	position: relative;
	/* position: absolute; */
	/* position: fixed; */
	/* position: static; */
	/* display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-areas: "exposure" "therapy" "grass"; */
	/* overflow: none; */
	/* display: flex;
    flex-direction: column; */
	/* overflow: auto; */
	/* overflow: hidden; */
	/* justify-items: center; */
	/* align-items: center; */
	/* justify-content: center; */
`;

export const BlogWrapper = styled.div`
	/* display: flex;
	flex-direction: column; */
	/* align-items: center; */
	/* justify-items: center; */
	/* justify-content: center; */
	position: relative;
	/* position: absolute; */
	z-index: 1;
	/* overflow: auto; */
	height: 100vh;
	width: 100vw;
	/* height: 100%;
    width: 100%;
    overflow: auto; */
	/* margin: auto; */
`;

export const BlogShell = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	/* position: relative; */
`;

export const BlogPost = styled.div`
	/* flex: 1; */
	/* height: 100vh;
	width: 100vw; */
	/* height: 100%;
	width: 100%; */
	/* position: relative; */
	/* position: absolute; */
	/* align-items: center;
    justify-items: center; */
	/* overflow-x: hidden; */
	/* margin: auto; */

	/* multiple videos */
	height: 100%;
	width: 100%;
	/* position: relative; */
	position: absolute;
	top: 0;
	left: 0;

	/* display: flex;
    flex-direction: column; */
	/* overflow: auto; */
`;

export const PostWrapper = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	/* works */

	/* display: flex;
    align-items: center;
    justify-content: center; */
`;

export const PostBackdrop = styled.div`
	/* flex: 1; */
	/* position: absolute; */
	/* position: relative; */
	/* top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%; */
	/* max-width: 100vw;
	max-height: 100vh; */
	/* width: 100vw;
	height: 100vh; */
	/* overflow: hidden; */
	/* margin: auto; */

	/* single video wrapper */
	z-index: 3;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* position: relative; */
	position: absolute;

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
				rgba(63, 191, 63, 0.2) 10%,
				rgba(63, 191, 63, 0.3) 20%,
				/* rgba(63, 191, 63, 0.4) 30%,
				rgba(63, 191, 63, 0.5) 40%,
				rgba(63, 191, 63, 0.6) 50%,
				rgba(63, 191, 63, 0.7) 60%,
				rgba(63, 191, 63, 0.8) 70%,
				rgba(63, 191, 63, 0.9) 80%,
				rgba(63, 191, 63, 1.0) 90%, */
					rgba(63, 150, 63, 0.2) 100%
			),
			linear-gradient(180deg, rgba(63, 191, 63, 0.1) 0%, transparent 100%);
		z-index: 4;
	}
`;

export const BackdropVideo = styled.video`
	/* max-width: 100vw;
	max-height: 100vh; */
	/* width: 100vw;
	height: 100vh; */
	/* width: 100%;
	height: 100%; */
	/* -o-object-fit: cover;
	object-fit: cover; */
	/* -o-object-fit: contain;
	object-fit: contain; */
	/* position: absolute; */

	/* single video */
	width: 100%;
	height: 100%;
	object-fit: cover;
	/* position: relative; */
	/* position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0; */
`;

export const ContentWrapper = styled.div`
	z-index: 4;
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
    padding: 2rem;

	@media screen and (max-width: 768px) {
		/* top: 20%;
        bottom: 20%; */
	}
`;

export const BlogContent = styled.div`
	/* flex: 1;
	z-index: 2; */

	/* fixing multiple posts */
	/* width: 100%;
	height: 100%; */

	/* width: 100vw;
	height: 100vh; */

	/* max-width: 1000px; */
	/* fixing multiple posts */

	/* position: absolute;
     */
	/* position: relative; */

	/* display: flex;
	flex-direction: column;
	align-items: center; */

	/* justify-items: center; */

	/* justify-content: center; */

	/* multiple posts with multiple videos */
	z-index: 4;
	height: 100%;
	/* width: 500px; */
	/* width: 100%; */
	/* max-width: 500px; */
	/* position: absolute; */
	/* object-fit: cover; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	/* justify-self: center;
    align-self: center; */
`;

export const BlogTitle = styled.h6`
	font-size: 4em;
	text-align: center;
	/* height: 100%; */
	height: 10px;

	@media screen and (max-width: 768px) {
		font-size: 3em;
		/* max-width: 250px; */
	}
`;

export const BlogBody = styled.p`
	font-size: 2em;
	text-align: center;
	max-width: 800px;
	/* height: 100%; */
	height: 100%;

	@media screen and (max-width: 768px) {
		font-size: 1.2em;
		max-width: 250px;
		height: 100%;
	}
`;
