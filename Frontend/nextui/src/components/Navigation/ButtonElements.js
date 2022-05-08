import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
	border-radius: 50px;
	background: ${({ primary }) =>
		primary ? "var(--default-button-background-color)" : " #134611"};
	white-space: nowrap;
	padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
	color: ${({ dark }) =>
		dark ? "var(--default-button-text-color)" : "#76b041"};
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
	outline: none;
	/* border: solid 2px; */
	/* border-color: var(--default-button-border-color); */
	text-shadow: 0 0 5px var(--default-button-shadow-color);
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? "var(--hovered-button-background-color)" : "#3CF301")};
		color: var(--hovered-button-text-color);
		/* border-color: var(--hovered-button-border-color); */
		text-shadow: 0 0 5px var(--hovered-button-shadow-color);
	}
`;
