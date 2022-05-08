import { BreakPoint, HomeContainer } from "./HomeElements";
import data from "./index.data";
import {
	HomeIcon,
	CameraIcon,
	VideoCameraIcon,
	PencilIcon,
	MicrophoneIcon,
	BriefcaseIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
import loadable from "@loadable/component";
import { FaBars } from "react-icons/fa";
// import Camera from '@heroicons/react/outline/CameraIcon'
const Camera = loadable(() => import("@heroicons/react/outline/CameraIcon"));
import Hero from "./Hero";
import Information from "./Information";
// import HomeNavigation from "../Navigation/Introduction";
import Introduction from "../Navigation/Introduction";
import { useRef } from "react";
import Services from "./Services";
import Policies from "./Policies";

const Home = ({
	informationReference,
	servicesReference,
	policiesReference,
}) => {
	// const informationRef = useRef();

	return (
		<>
			<HomeContainer>
				{/* <Information /> */}
				{/* <Introduction /> */}
				<Hero />
				<Information informationReference={informationReference} />
				<Services servicesReference={servicesReference} />
				<Policies policiesReference={policiesReference} />
			</HomeContainer>
		</>
	);
};

export default Home;
