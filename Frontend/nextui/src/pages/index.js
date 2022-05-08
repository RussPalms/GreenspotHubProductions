import Clip from "components/Navigation/Clip";
import Home from "components/Home";
import Layout from "components/Layout";
import { useState } from "react";
import TestBox from "components/TestBox";
import BoogeyStickman from "animations/BoogeyStickman";

const IndexPage = ({
	informationReference,
	servicesReference,
	policiesReference,
}) => {
	const [showModal, setShowModal] = useState(true);

	// const myCallback = () => console.log("Video has ended");

	return (
		<>
			<Layout>
				{/* <BoogeyStickman /> */}
				{/* <button onClick={() => setShowModal(true)}>Open Modal</button> */}
				{/* <Clip onClose={() => setShowModal(false)} show={showModal}/> */}
				<Home
					informationReference={informationReference}
					servicesReference={servicesReference}
					policiesReference={policiesReference}
				/>
				{/* hello */}
				{/* <TestBox>hello</TestBox> */}
				{/* <TestBox /> */}
			</Layout>
			{/* <Clip /> */}
		</>
	);
};

export default IndexPage;
