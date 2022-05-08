import styled from "styled-components";
import Image from "next/image";
import Deposit from "../../../assets/images/LandingPageProps/Policies/Deposit.svg";

export const PoliciesContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	/* color: var(--default-text-color); */
`;

// export const PoliciesShell = styled.div``;

export const Policy = styled.div`
	height: 100%;
	width: 100%;
	/* color: white;
    background: white; */
	display: flex;
	white-space: nowrap;
	align-items: center;
	justify-content: center;
	/* text-align: center; */
	/* justify-items: center; */
	/* padding: 5px; */
	font-size: 1em;

	@media screen and (max-width: 768px) {
		font-size: 0.5em;
		/* justify-content: flex-start; */
		flex-direction: column;
	}
`;

export const PolicyGraphic = styled.div`
	height: 100%;
	display: flex;
	margin-right: 10px;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 768px) {
		height: 70px;
		width: 70px;
		margin-right: 0px;
	}
`;

export const DescriptionWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const PolicyDescription = styled.p`
	/* width: 100%;
	height: 100%; */
	margin-left: 10px;
	text-align: center;
	/* display: flex; */
	/* letter-spacing: 2em; */
	/* width: 4em; */
	/* font-size: 10px; */
	/* height: 20px; */
	/* display: flex; */

	@media screen and (max-width: 768) {
		/* margin-top: -20px; */
		margin-left: 0px;
		width: 100%;
		/* justify-self: center; */
	}
`;
