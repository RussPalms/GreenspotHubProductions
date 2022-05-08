import styled from "styled-components";

export const NavigationContainer = styled.div`
	/* position: absolute; */
	/* position: fixed; */
	/* border: solid black 1px; */
	background: var(--default-background-color);
	color: var(--default-text-color);
	/* text-shadow: 0 0 1px #FF0000, 0 0 2px #0000FF; */
	text-shadow: 0 0 5px var(--default-text-shadow-color);
	/* opacity: 0.5; */
	/* z-index: 1; */
	/* height: 100%; */
	/* top: 0;
	bottom: 0;
	position: sticky; */
	height: 100vh;
	width: 100vw;
	/* height: 100%; */
	/* width: 100%; */
	/* max-height: 100vh; */
	/* margin-bottom: -1000px; */
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	grid-template-areas: "header" "main" "footer";
	z-index: 1000;
	/* opacity: 0; */
	/* margin-bottom: 60px;
	margin-top: 60px; */

	z-index: 3;
`;
