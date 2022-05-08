import Navigation from "components/Navigation";
import { LayoutContainer } from "./LayoutElements";
import { useState } from "react";
import Introduction from "components/Navigation/Introduction";
import BoogeyStickman from "animations/BoogeyStickman";

const Layout = ({
	children,
	informationReference,
	servicesReference,
	policiesReference,
}) => {
	// const [isOpen, setIsOpen] = useState(false);
	// const toggle = () => {
	// 	setIsOpen(!isOpen);
	// };

	return (
		<>
			{/* <Introduction /> */}
			{/* <BoogeyStickman /> */}
			<LayoutContainer
				informationReference={informationReference}
				servicesReference={servicesReference}
				policiesReference={policiesReference}
			>
				{children}
			</LayoutContainer>
		</>
	);
};

export default Layout;
