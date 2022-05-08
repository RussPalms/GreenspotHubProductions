import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const TitleShell = styled.div`
	display: grid;
	grid-area: Titles;
	width: 100%;
	grid-column-gap: 1rem;

	/* color: #40ff00; */
`;

export const Title = styled.a`
	display: flex;
	text-align: center;
	justify-content: center;
	font-size: 0.5em;

	/* &:hover {
		color: ${({ propertyChange }) => (propertyChange ? "inherit" : "#40ff00")};
	} */

	/* color: #40ff00; */
`;

export const Titles = styled.div`
	grid-row-start: 2;
	margin: auto;
	width: 1.5rem;

	/* &:hover {
		color: ${({ propertyChange }) => (propertyChange ? "inherit" : "#40ff00")};
	} */

	/* :hover {
		color: #40ff00;
	} */

	/* color: #40ff00; */
`;

export const IconContainer = styled.div`
	display: grid;
	grid-area: Icons;
	width: 100%;
	height: 100%;
	grid-column-gap: 1rem;
	/* > a :hover {
		color: #40ff00;
	} */

	/* div ~ ${TitleShell} {
		color: #40ff00;
	} */

	/* color: #40ff00; */
`;

export const Icons = styled.a`
	grid-row-start: 1;
	width: 1.5rem;
	margin: auto;

	/* &:hover {
		color: #40ff00;
	} */

	/* &:hover {
		color: ${({ propertyChange }) => (propertyChange ? "inherit" : "#40ff00")};
	} */

	/* &:hover {
		color: #40ff00;
	} */

	/* color: ${({ propertyChange }) =>
		propertyChange ? "inherit" : "#40ff00"}; */

	/* color: #40ff00; */
`;

export const Properties = styled.div`
	display: grid;
	grid-template-areas:
		"Icons Icons Icons Icons Icons Icons Icons"
		"Titles Titles Titles Titles Titles Titles Titles";
	grid-template-rows: 1fr 1fr;
	grid-template-columns: repeat(7, 1fr);
	height: 100%;
	align-items: center;
	justify-content: center;
	grid-column-gap: 1em;
	width: 100%;
	padding: 0.5rem;

	/* &:hover {
		color: ${({ propertyChange }) => (propertyChange ? "inherit" : "#40ff00")};
	} */

	/* :hover {
		color: #40ff00}
	} */

	/* :nth-child(2) :hover {
		color: #40ff00;
	} */

	/* > div > a :hover {
		color: #40ff00;
	} */

	/* > :hover {
		color: #40ff00;
	} */

	/* & ${TitleShell}:nth-child(2) ${Titles} :hover {
		color: #40ff00;
	} */

	/* ${Icons} :hover {
		color: #40ff00;
	} */

	/* > div > a :hover {
		color: #40ff00;
	} */

	/* ${Titles} :hover {
		color: #40ff00;
	} */

	/* ${TitleShell}:nth-child(2) :hover {
		color: #40ff00;
	} */

	/* ${TitleShell}:nth-child(2) ${Titles}:hover, ${Icons} :hover {
		color: #40ff00;
	} */

	/* &${IconContainer}:nth-child(1) ${Icons} :hover {
		color: #40ff00;
	} */

	/* color: #40ff00; */

	/* ${IconContainer}:hover ~ ${TitleShell} {
		color: #40ff00;
	} */

	/* ${IconContainer} >${Icons}:hover ~ ${TitleShell}  {
		color: #40ff00;
	} */

	/* ${Icons}, ${Titles} {
		${IconContainer} ~ ${TitleShell} {
			color: #40ff00;
		}
	} */

	/* ${IconContainer}:hover, ${TitleShell} :hover{
		color: #40ff00;
	} */

	/* ${IconContainer} > ${Icons}:hover {
		color: #40ff00;
	}

	${TitleShell} > ${Titles}:hover {
		color: #40ff00;
	} */

	/* ${IconContainer} > ${Icons}:hover ~ ${TitleShell} > ${Titles}:hover {
		color: #40ff00;
	} */

	/* > div > a:hover ~ ${TitleShell} {
		color: #40ff00;
	} */
`;

export const ContentContainer = styled.footer`
	background: var(--transparent-background-color);
	overflow: none;
	white-space: nowrap;
	height: 60px;
	/* height: 6vh; */
	/* height: 100vh; */
	width: 100%;
	grid-area: footer;
	/* display: flex;
	justify-content: center;
	align-items: center; */
	display: grid;
	align-items: center;
	justify-content: center;
	justify-items: center;
	/* grid-template-areas:
		"Icons Icons Icons Icons Icons Icons Icons"
		"Titles Titles Titles Titles Titles Titles Titles";
	grid-template-rows: auto; */
	grid-template-columns: repeat(7, 1fr);
	grid-column-gap: 1em;
	padding: 0.8rem;
	z-index: 4;

	/* ${IconContainer}, ${TitleShell} {
		${Properties}:hover {
			color: #40ff00;
		}
	} */

	/* ${Properties} > ${IconContainer} >${Icons}:hover, ${TitleShell} >${Titles}:hover {
		color: #40ff00;
	} */

	/* ${Properties}:hover {
		> ${IconContainer}, ${TitleShell} {
			> ${Icons},${Titles} {
				color: #40ff00;
			}
		}
	} */

	/* ${Properties} {
		> ${IconContainer}, ${TitleShell} {
			> ${Icons}:hover,${Titles}:hover {
				color: #40ff00;
			}
		}
		> ${IconContainer} > ${Icons}:hover {
			color: #40ff00;
		}
		> ${TitleShell} > ${Titles}:hover {
			color: #40ff00;
		}
	} */

	/* ${Properties}:hover > ${IconContainer} > ${Icons}, ${TitleShell} > ${Titles} {
		color: #40ff00;
	} */
`;

export const ContentRoute = styled.nav``;

export const ButtonProperties = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* height: auto; */
	/* margin: auto; */
	/* margin: auto; */
	/* height: 100%; */
	/* width: auto; */
	width: 2rem;
	cursor: pointer;

	&:hover {
		color: var(--hovered-text-color);
		text-shadow: 0 0 5px var(--hovered-text-shadow-color);
	}

	/* border: solid black 1px; */
`;

export const IconProperties = styled.div`
	/* grid-area: Icons; */
	grid-row-start: 1;
	width: 1.5rem;
	margin: auto;
	height: 100%;

	@keyframes pulse {
		0% {
			transform: scale(0.95);
		}

		70% {
			transform: scale(1.5);
			opacity: 0.5;
		}

		100% {
			transform: scale(0.95);
			opacity: 0;
		} 

		/* 100% {
			transform: scale(1.5);
		}

		/* from {
			transform: scale(1);
		}
		to {
			transfom: scale(1.5);
		} */
	}

	${ButtonProperties}:hover & {
		transform: scale(1.5);
		/* animation: pulse 1s cubic-bezier(0, 0, 0.2, 1) infinite; */
		/* animation: pulse 1s; */
		transition: all 0.3s ease-in-out;
	}

	${ButtonProperties} &.active {
		transform: scale(1.5);
		/* animation: pulse 1s cubic-bezier(0, 0, 0.2, 1) infinite; */
		/* animation: pulse 1s; */
	}
`;

export const TitleProperties = styled.div`
	/* grid-area: Titles; */
	/* grid-row-start: 2; */
	text-align: center;
	justify-content: center;
	font-size: 0.6em;
	letter-spacing: 0.05em;
	/* margin: auto; */
	/* display: none; */
	opacity: 0;

	${ButtonProperties}:hover & {
		opacity: 1;
	}

	@media screen and (max-width: 768px) {
		opacity: 1;
	}
`;
