import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const IntroductionContainer = styled.nav`
	background: var(--transparent-background-color);
	/* border: solid black 1px; */
	/* height: 7vh; */
	height: 60px;
	/* height: 6vh; */
	/* height: 100vh; */
	/* width: 100%; */
	/* position: sticky; */
	/* height: 7%; */
	/* top: 0; */
	/* position: sticky; */
	/* z-index: 1; */
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	grid-area: header;
	/* padding: 10px; */

	/* @media screen and (max-width: 768px) {
		justify-self: flex-start;
		margin-left: 50px;
	} */
	z-index: 4;

	/* margin-bottom: -60px; */
`;

export const IntroductionShell = styled.nav`
	/* border: solid black 1px; */
	/* z-index: 1; */
	/* height: 25px; */
	/* display: flex;
	align-items: center;
	justify-content: space-evenly; */
	/* padding: 10px; */
`;

export const LogoShell = styled.div`
	flex: 0.3;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 768px) {
		justify-self: flex-start;
	}
`;

export const GreenHubProductionsLogo = styled.a`
	font-size: 1.5rem;
	font-weight: bold;
	white-space: nowrap;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		color: var(--hovered-text-color);
		text-shadow: 0 0 5px var(--hovered-text-shadow-color);
	}
`;

export const MenuIcon = styled(FaBars)``;

export const MobileMenu = styled.div`
	display: none;
	justify-self: flex-end;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		margin-bottom: 50px;
		transform: translate(-100%, 60%);
		font-size: 1.5rem;
	}
`;

export const ButtonShell = styled.div`
	flex: 0.1;
	display: flex;
	justify-content: center;
`;

export const SigninButton = styled.button`
	/* background: transparent; */
	border-radius: 20px;
	border: none;
	/* border: solid 2px; */
	/* border-color: var(--default-button-border-color); */
	height: 40px;
	width: 90px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--default-button-background-color);
	cursor: pointer;
	color: var(--default-button-text-color);
	text-shadow: 0 0 5px var(--default-button-text-shadow-color);
	transition: all 0.2s ease-in-out;
	/* box-shadow: 6px 3px 3px var(--default-button-background-shadow-color); */

	&:hover {
		background: var(--hovered-button-background-color);
		color: var(--hovered-button-text-color);
		/* border-color: var(--hovered-button-border-color); */
		text-shadow: 0 0 5px var(--hovered-button-text-shadow-color);
		/* box-shadow: 6px 3px 3px var(--hovered-button-background-shadow-color); */
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const ButtonTag = styled.p`
	font-size: 0.8rem;
	/* font-family: inherit; */
	/* height: 100%; */
	/* text-decoration: none; */
`;

export const LinkMenu = styled.ul`
	display: flex;
	flex: 0.5;
	/* justify-content: space-evenly; */
	align-items: center;
	/* justify-content: center; */
	height: 100%;
	/* margin: auto; */

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const IntroductionLink = styled.li`
	height: 100%;
	/* align-items: center; */
	/* justify-self: center; */
	margin: auto;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-shadow: 0 0 5px var(--default-text-shadow-color);

	&:hover {
		color: var(--hovered-text-color);
		text-shadow: 0 0 5px var(--hovered-text-shadow-color);
	}

	@keyframes glow {
		0% {
			opacity: 1;
		}

		5% {
			opacity: 0.9;
		}

		10% {
			opacity: 0.8;
		}

		15% {
			opacity: 0.7;
		}

		20% {
			opacity: 0.6;
		}

		25% {
			opacity: 0.5;
		}

		30% {
			opacity: 0.4;
		}

		35% {
			opacity: 0.3;
		}

		40% {
			opacity: 0.2;
		}

		45% {
			opacity: 0.1;
		}

		50% {
			opacity: 0;
		}

		55% {
			opacity: 0.1;
		}

		60% {
			opacity: 0.2;
		}

		65% {
			opacity: 0.3;
		}

		70% {
			opacity: 0.4;
		}

		75% {
			opacity: 0.5;
		}

		80% {
			opacity: 0.6;
		}

		85% {
			opacity: 0.7;
		}

		90% {
			opacity: 0.8;
		}

		95% {
			opacity: 0.9;
		}

		100% {
			opacity: 1;
		}
	}

	/* &.active {
		border-bottom: 3px solid #40ff00;
		animation-name: glow;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		transition: all 0.2s ease-in-out;
	} */

	border-bottom: ${({ isActive }) =>
		isActive ? "3px solid #40ff00" : "none"};
	animation-name: ${({ isActive }) => (isActive ? "glow" : "none")};
	color: ${({ isActive }) =>
		isActive ? "var(--hovered-text-color)" : "var(--text-color)"};
	/* animation-name: glow; */
	animation-duration: 2s;
	animation-iteration-count: infinite;
	/* transition: all 0.2s ease-in-out; */
`;

export const LinkItem = styled.p`
	/* font-size: 0.9rem; */
	height: 100%;
	align-items: center;
	margin: auto;
	/* margin-top: 30px; */
	/* text-align: center; */
	justify-self: center;
	cursor: pointer;
`;

// export const Nav = styled.nav`
// 	background: ${({ scrollNav }) =>
// 		scrollNav ? "transparent" : "transparent"};
// 	height: 65px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	font-size: 1rem;
// 	position: sticky;
// 	top: 0;
// 	z-index: 10;
// 	transition: 0.8s all ease;

// 	@media screen and (max-width: 960px) {
// 		transition: 0.8s all ease;
// 	}
// `;

// export const NavbarContainer = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	height: 65px;
// 	z-index: 1;
// 	width: 100%;
// 	padding: 0 24px;
// 	max-width: 1100px;
// `;

// export const NavLogo = styled.a`
// 	color: #22cd00;
// 	justify-self: flex-start;
// 	font-size: 1.5rem;
// 	display: flex;
// 	align-items: center;
// 	margin-left: 15px;
// 	font-weight: bold;
// 	text-decoration: none;

// 	&:hover {
// 		transition: all 0.2s ease-in-out;
// 		color: #40ff00;
// 	}
// `;

// export const MobileIcon = styled.div`
// 	display: none;
// 	justify-self: flex-end;

// 	@media screen and (max-width: 768px) {
// 		display: block;
// 		position: absolute;
// 		top: 0;
// 		right: 0;
// 		margin-bottom: 50px;
// 		transform: translate(-100%, 60%);
// 		font-size: 1.5rem;
// 	}
// `;

// export const NavMenu = styled.ul`
// 	display: flex;
// 	align-items: center;
// 	list-style: none;
// 	text-align: center;

// 	@media screen and (max-width: 768px) {
// 		display: none;
// 	}
// `;

// export const NavItem = styled.li`
// 	height: 65px;
// `;

// export const NavLinks = styled(LinkS)`
// 	color: #22cd00;
// 	display: flex;
// 	align-items: center;
// 	text-decoration: none;
// 	padding: 0 1rem;
// 	height: 100%;

// 	&:hover {
// 		transition: all 0.2s ease-in-out;
// 		color: #40ff00;
// 	}

// 	@keyframes glow {
// 		0% {
// 			opacity: 1;
// 		}

// 		5% {
// 			opacity: 0.9;
// 		}

// 		10% {
// 			opacity: 0.8;
// 		}

// 		15% {
// 			opacity: 0.7;
// 		}

// 		20% {
// 			opacity: 0.6;
// 		}

// 		25% {
// 			opacity: 0.5;
// 		}

// 		30% {
// 			opacity: 0.4;
// 		}

// 		35% {
// 			opacity: 0.3;
// 		}

// 		40% {
// 			opacity: 0.2;
// 		}

// 		45% {
// 			opacity: 0.1;
// 		}

// 		50% {
// 			opacity: 0;
// 		}

// 		55% {
// 			opacity: 0.1;
// 		}

// 		60% {
// 			opacity: 0.2;
// 		}

// 		65% {
// 			opacity: 0.3;
// 		}

// 		70% {
// 			opacity: 0.4;
// 		}

// 		75% {
// 			opacity: 0.5;
// 		}

// 		80% {
// 			opacity: 0.6;
// 		}

// 		85% {
// 			opacity: 0.7;
// 		}

// 		90% {
// 			opacity: 0.8;
// 		}

// 		95% {
// 			opacity: 0.9;
// 		}

// 		100% {
// 			opacity: 1;
// 		}
// 	}

// 	&.active {
// 		border-bottom: 3px solid #40ff00;
// 		animation-name: glow;
// 		animation-duration: 2s;
// 		animation-iteration-count: infinite;
// 		transition: all 0.2s ease-in-out;
// 	}
// `;

// export const NavBtn = styled.nav`
// 	display: flex;
// 	align-items: center;

// 	@media screen and (max-width: 768px) {
// 		display: none;
// 	}
// `;

// export const NavBtnLink = styled.a`
// 	border-radius: 50px;
// 	background: #8cc540;
// 	white-space: nowrap;
// 	padding: 10px 22px;
// 	color: #134611;
// 	font-size: 16px;
// 	outline: none;
// 	border: none;
// 	transition: all 0.2s ease-in-out;
// 	text-decoration: none;

// 	&:hover {
// 		transition: all 0.2s ease-in-out;
// 		background: #22cd00;
// 		color: #215600;
// 	}
// `;
