import styled from "styled-components";
import Image from "next/image";

export const PlatformContainer = styled.section`
	/* color: #40ff00; */
	background: ${({ lightBg }) => (lightBg ? " #76b041" : "#127c09")};
	/* height: 100vh; */
	/* z-index: 3; */
	/* margin-bottom: 0; */
	height: 100%;
	/* height: 100vh !important; */
	/* width: 100%; */
	/* width: 100vw !important; */
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	/* position: absolute; */
	/* overflow: hidden !important; */

	/* @media screen and (max-width: 768px) {
		padding: 100px 0;
	} */

	/* @media screen and (max-width: 768px) {
		height: 100vh;
	} */
`;

export const InfoWrapper = styled.div`
	flex: 1;
	display: grid;
	z-index: 1;
	/* height: 100vh; */
	height: 100%;
	width: 100vw;
	/* max-width: 1100px; */
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;

	/* @media screen and (max-width: 786px) {
		margin-bottom: -15px;
		height: 80vh;
	} */

	/* @media screen and (max-width: 768px) {
		height: 100vh;
	} */
`;

export const InfoRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col2 col1'` : `'col1 col2'`};
	/* height: 100%; */

	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) =>
			imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
	} ;
`;

export const Column1 = styled.div`
	/* margin-bottom: 15px; */
	padding: 0 15px;
	grid-area: col1;
	/* height: 100%; */

	/* @media screen and (max-width: 786px) {
		margin-bottom: 0px;
	} */
`;

export const Column2 = styled.div`
	/* margin-bottom: 15px; */
	padding: 0 15px;
	grid-area: col2;
	height: 100%;
	/* display: none; */

	/* @media screen and (max-width: 786px) {
		margin-top: -200px;
		margin-bottom: 0;
	} */
`;

export const TextWrapper = styled.div`
	/* max-width: 540px; */
	padding-top: 0;
	/* padding-bottom: 60px; */

	/* @media screen and (max-width: 786px) {
		margin-top: -160px;
		padding-bottom: 0px;
	} */
`;

export const TopLine = styled.p`
	color: #134611;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	/* margin-bottom: 16px; */
	/* white-space: wrap; */

	/* @media screen and (max-width: 786px) {
		margin-bottom: 0px;
	} */
`;

export const Heading = styled.h1`
	/* margin-bottom: 24px; */
	/* font-size: 48px; */
	font-size: 40px;
	/* line-height: 1.1; */
	line-height: 2.8rem;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? "#76b041" : "#127c09")};
	white-space: normal !important;

	/* border: solid black 1px; */

	/* @media screen and (max-width: 480px) {
		font-size: 32px;
		margin-bottom: 0px;
	} */
`;

export const Subtitle = styled.p`
	max-width: 440px;
	/* margin-bottom: 35px; */
	font-size: 18px;
	line-height: 24px;
	color: ${({ darkText }) => (darkText ? "#127c09" : "#8cc540")};
	/* border: solid black 1px; */
	white-space: normal !important;

	/* @media screen and (max-width: 480px) {
		margin-bottom: 0px;
	} */
`;

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const ImgWrap = styled.div`
	max-width: 555px;
	/* width: 500px; */
	height: 100%;
	display: flex;
		justify-content: center;
		align-items: center;
	/* } */

	/* @media screen and (min-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
	} */
`;

// export const Img = styled.img`
// 	width: 100%;
// 	margin: 0 0 10px 0;
// 	padding-right: 0;
// `;

export const Img = styled(Image)`
	/* width: 100%; */
	/* width: 500px; */
	/* height: 100%; */
	margin: 0 0 10px 0;
	padding-right: 0;
`;
