import styled, { createGlobalStyle } from "styled-components";

export const DrawingContainer = styled.div`
	z-index: 2000;
	pointer-events: none;
	transform: translate3d(0, 0, 0);
	position: absolute;
	/* position: fixed; */
	/* position: relative; */
	/* position: ${({ pointerFix }) => (pointerFix ? "relative" : "fixed")}; */
	top: 0;
	left: 0;
	/* right: 0; */
	/* right: 0;
	bottom: 0; */
	margin-top: 35px;
	/* margin-bottom: -35px; */
	/* height: 124px;
	display: none; */
	display: block;
	/* overflow: none; */
	/* white-space: nowrap; */
	/* overscroll-behavior: contain; */
	/* overflow: hidden; */
	/* overflow: scroll; */
	/* width: 100%; */
	/* height: 100vh; */
	/* overflow: initial; */
	/* clip: shape; */
	/* overflow-x: hidden; */
	/* transition: infinite;
	margin-left: ${({ pointerFix }) => (pointerFix ? "0" : "-35px;")}; */
	/* margin-left: -30px; */
	/* right: 0; */
	/* margin-right: 20px; */

	/* @media screen and (max-width: 768px) {
		display: none;
	} */
	/* border: black solid 0.05px; */
`;

export const BSContainer = styled.div`
	/* border: black solid 0.05px; */
	/* margin-right: 5px; */
	height: 100%;
	width: 100%;
	margin-top: ${({ pointerTransition }) =>
		pointerTransition ? "-11px" : "-35px"};
	margin-left: ${({ pointerTransition }) =>
		pointerTransition ? "9px" : "1px"};
	transition: 0.1s linear;
	/* left: 0; */
	/* overflow-x: hidden; */
`;

export const BSBody = styled.div`
	display: flex;
	margin-left: 2.6px;
`;

export const BSLayout = styled.div`
	height: 124px;
	/* height: 100%; */
	width: 21.045px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 5;
	margin-left: -0.9px;
`;

export const TopSection = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-right: 3px;
	z-index: 4;
`;

export const Hat = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	transform: rotate(15deg);
	margin-left: 5.6px;
	margin-bottom: -5px;
	margin-top: 0.8px;
	height: 14.5px;
	width: 20px;
	z-index: 3;
`;

export const HatTop = styled.div`
	background: #40ff00;
	border: black solid 0.05px;
	height: 100%;
	width: 13.3px;
	border-radius: 3px;
	z-index: 1;
	margin-bottom: -4px;
	transform: rotate(2deg);
`;

export const HatBottom = styled.div`
	background: #40ff00;
	border: black solid 0.05px;
	width: 100%;
	height: 5.5px;
	z-index: 3;
`;

export const StickHead = styled.div`
	border: black solid 0.05px;
	background: #127c09;
	border-radius: 50%;
	height: 20px;
	width: 17.7px;
	z-index: 2;
`;

export const BottomSection = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	z-index: 1;
	margin-right: -4px;
`;

export const LeftArm = styled.div`
	border-radius: 2.5px;
	z-index: 3;
	border: black solid 0.05px;
	background: #127c09;
	/* width: 4px; */
	width: 5px;
	height: ${({ pointerTransition }) =>
		pointerTransition ? "80.7px" : "37px"};
	margin-top: 43.7px;
	margin-right: ${({ pointerTransition }) =>
		pointerTransition ? "-10px" : "-6px"};
	transform: ${({ pointerTransition }) =>
		pointerTransition ? "rotate(-7deg) translateY(-70px)" : "none"};
	transition: 0.1s linear;

	/* &:hover {
		margin-top: 0px;
		height: 80.7px;
		transform: rotate(-4.1deg) translateY(-35px);
		transition: 0.5s ease-in-out;
	} */
`;

// export const LeftArmPointer = styled.div`
// 	border-radius: 2.5px;
// 	z-index: 3;
// 	border: black solid 0.1px;
// 	background: #127c09;
// 	width: 4px;
// 	height: 80.7px;
// 	margin-top: 0px;
// 	margin-right: -6.91px;
// 	transform: rotate(-4.1deg) translateY(-35px);
// 	transition: 0.5s ease-in-out;
// `;

export const RightArm = styled.div`
	border: black solid 0.05px;
	background: #127c09;
	/* width: 4px; */
	width: 5px;
	height: 37px;
	border-radius: 2.5px;
	margin-bottom: 30px;
	margin-left: -1px;
	/* margin-right: -1px; */
	z-index: 0;
`;

export const LeftLeg = styled.div`
	border: black solid 0.05px;
	background: #22cd00;
	/* width: 3.7px; */
	width: 4.7px;
	height: 98%;
	border-radius: 2.5px;
	margin-bottom: 3px;
	/* margin-left: 1px; */
	margin-right: -2px;
	z-index: 2;
`;

export const RightLeg = styled.div`
	border: black solid 0.05px;
	background: #127c09;
	/* width: 4.7px; */
	width: 6px;
	height: 102%;
	border-radius: 2.5px;
	margin-bottom: 1.7px;
	margin-left: 0px;
	z-index: 1;
`;

// export const BSPointer = styled.div``;

// export const PointerProperties = createGlobalStyle`
// 	${BSPointer} {
// 		@keyframes cursorAnim {
// 			0% {
// 			transform: scale(1);
// 			}
// 			50% {
// 			transform: scale(5);
// 			}
// 			100% {
// 			transform: scale(1);
// 			opacity: 0;
// 			}
// 		}

// 		animation: cursorAnim .5s forwards;
// 	}
// `;
