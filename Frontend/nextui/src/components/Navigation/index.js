import { NavigationContainer } from "./NavigationElements";
import Introduction from "./Introduction";
import Content from "./Content";
import Sidebar from "./Introduction/Sidebar";
import Clip from "./Clip";
import BoogeyStickman from "animations/BoogeyStickman";
import { useRef } from "react";

const Navigation = ({
	children,
	isOpen,
	toggle,
	clipDisplayed,
	redirect,
	pointer,
	handleInformationDirect,
	handleServicesDirect,
	handlePoliciesDirect,
}) => {
	return (
		<>
			<NavigationContainer>
				{/* <BoogeyStickman /> */}
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<Introduction
					toggle={toggle}
					pointer={pointer}
					handleInformationDirect={handleInformationDirect}
					handleServicesDirect={handleServicesDirect}
					handlePoliciesDirect={handlePoliciesDirect}
				/>
				{/* <Clip clipOpen={clipDisplayed} redirect={redirect} /> */}
				{children}
				<Content />
			</NavigationContainer>
		</>
	);
};

export default Navigation;
