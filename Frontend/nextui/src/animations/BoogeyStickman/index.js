import {
	DrawingContainer,
	BSContainer,
	BSLayout,
	HatTop,
	LeftArmCursor,
	LeftArm,
	LeftLeg,
	HatBottom,
	StickHead,
	RightArm,
	RightLeg,
	BottomSection,
	TopSection,
	Hat,
	BSBody,
} from "./BoogeyStickmanElements";
import { useRef, useEffect, useState } from "react";
// import { disableBodyScroll } from "body-scroll-lock";
// import ReactDOM from "react-dom";

const BoogeyStickman = ({ show, onClose, pointerTransition, pointerFix }) => {
	const [isBrowser, setIsBrowser] = useState(false);

	const [scrollPointer, setScrollPointer] = useState(false);

	// const changePointer = () => {
	// 	if (window.scrollY >= 80) {
	// 		setScrollPointer(true);
	// 	} else {
	// 		setScrollPointer(false);
	// 	}
	// };

	const cursorRef = useRef(null);
	useEffect(() => {
		// setIsBrowser(true);

		if (cursorRef.current == null || cursorRef == null) return;
		document.addEventListener("mousemove", (e) => {
			if (cursorRef.current == null) return;
			cursorRef.current.setAttribute(
				"style",
				"top: " + e.pageY + "px; left: " + e.pageX + "px;"
			);
		});

		// const handleCloseClick = (e) => {
		// 	e.preventDefault();
		// 	onClose();
		// };

		// document.addEventListener("scroll", (e) => {
		// 	if (cursorRef.current == null) return;
		// 	cursorRef.current.setAttribute(
		// 		"style",
		// 		"top: " + e.pageY + "px; left: " + e.pageX + "px;"
		// 	);
		// });
	}, []);

	// const modalContent = show ? (
	// 	<>
	// 		<DrawingContainer ref={cursorRef} pointerFix={pointerFix}>
	// 			<BSContainer pointerTransition={pointerTransition}>
	// 				<BSBody>
	// 					<LeftArm pointerTransition={pointerTransition} />
	// 					<BSLayout>
	// 						<TopSection>
	// 							<Hat>
	// 								<HatTop />
	// 								<HatBottom />
	// 							</Hat>
	// 							<StickHead />
	// 						</TopSection>
	// 						<BottomSection>
	// 							<LeftLeg />
	// 							<RightLeg />
	// 							<RightArm />
	// 						</BottomSection>
	// 					</BSLayout>
	// 				</BSBody>
	// 			</BSContainer>
	// 		</DrawingContainer>
	// 	</>
	// ) : null;

	// if (isBrowser) {
	// 	return ReactDOM.createPortal(
	// 		modalContent,
	// 		document.getElementById("pointer-root")
	// 	);
	// } else {
	// 	return null;
	// }

	return (
		<DrawingContainer ref={cursorRef} pointerFix={pointerFix}>
			<BSContainer pointerTransition={pointerTransition}>
				<BSBody>
					<LeftArm pointerTransition={pointerTransition} />
					<BSLayout>
						<TopSection>
							<Hat>
								<HatTop />
								<HatBottom />
							</Hat>
							<StickHead />
						</TopSection>
						<BottomSection>
							<LeftLeg />
							<RightLeg />
							<RightArm />
						</BottomSection>
					</BSLayout>
				</BSBody>
			</BSContainer>
		</DrawingContainer>
	);
};

export default BoogeyStickman;
